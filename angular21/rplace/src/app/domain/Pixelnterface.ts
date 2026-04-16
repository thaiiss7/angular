import { UserDto } from "./UserInterfaces";

export interface PixelDto{
    id?: string,
    x: number,
    y: number,
    user?: UserDto,
    color: string,
    lastChange?: Date
}