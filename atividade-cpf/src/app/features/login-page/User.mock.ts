export interface IUser {
    id: number,
    name: string,
    bio?: string,
    cpf: string
}

const MockUsers: IUser[] = []