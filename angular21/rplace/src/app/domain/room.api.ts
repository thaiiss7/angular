import { Injectable } from '@angular/core';
import { Api } from './api';
import { IPixel } from '../features/main-page/Pixel.Mock';
import { CanvasAction, MessageType, WebSocketMessage } from './interfaces/room';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomApi extends Api {
  
  private wsUrl = "ws://10.234.197.18:5294/api/room"
  // subject: is a special type of Observable that allows values to be multicasted to many Observers. 
  // Subjects are like EventEmitters.
  private _pixelSubject = new Subject<CanvasAction>();
  private socket!: WebSocket;

  public pixelObservable: Observable<CanvasAction> = this._pixelSubject.asObservable();

  //etapa connect
  public connect = (roomId: string) => {
    const token = sessionStorage.getItem('token')
    if(!token) 
      return;

    this.socket = new WebSocket(`${this.wsUrl}/${roomId}?token=${encodeURIComponent(token)}`);

    this.socket.onopen = (event) => {
      console.log("conexão abrida")
    }

    //receber messages
    //para receber transforma uma string em obj
    this.socket.onmessage = (event: MessageEvent) => {
      const message: WebSocketMessage<any> = JSON.parse(event.data)

      switch (message.Type) {
        case MessageType.Message:
          console.log(message.Data)
          break;

          //.next - significa quq eu vou atualizar o valor do subject
        case MessageType.FirstConnection:
          this._pixelSubject.next({type: 'FULL_LOAD', payload: message.Data});
          break;

        case MessageType.PlayerAction:
          this._pixelSubject.next({type: 'SINGLE_LOAD', payload: message.Data})
          break;

        default:
          break;
      }
    }

    this.socket.onerror = (err) => {
      console.log("erro ai no socket: ", err)
    }

    this.socket.onclose = () => {
      console.log("conexão encerrada")
    }
  
  }

  public closeConnection = () => {
    if(this.socket){
      this.socket.close();
    }
  }

  //etapas messages - mandar info
  //para enviar transforma um obj em string
  public updatePixel = (data: IPixel) => {
    if(this.socket.readyState === WebSocket.OPEN){
      this.socket.send(JSON.stringify(data))
    } else {
      console.log("wb não conectado")
    }
  }

}

//
/*
FirstConnection -> pixel[]
PlayerActions-> pixel
Message -> string
*/
