import { IPixel } from "../../features/main-page/Pixel.Mock";
import { UserDto } from "../UserInterfaces";

export interface IRoom {
    id: string,
    name: string,
    players: UserDto[],
    pixels: IPixel[]
}

export interface MinimalizedRoom {
    id: string,
    name: string,
    quantityOfPlayers: number,
}

export interface GetAllRoomsResponse {
    rooms?: MinimalizedRoom[]
}

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