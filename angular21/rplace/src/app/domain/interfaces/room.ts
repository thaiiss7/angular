import { IPixel } from "../../features/main-page/Pixel.Mock";

export interface WebSocketMessage<T> {
    Type: MessageType,
    Data: T
}

export enum MessageType {
    Message,
    PlayerAction,
    FirstConnection
}

export type CanvasAction = 
| {type: "FULL_LOAD"; payload: IPixel[]}
| {type: "SINGLE_LOAD"; payload: IPixel}