export interface IUser {
    id: number,
    name: string,
    bio?: string,
    cpf: string,
    password: string
}

const MockUsers: IUser[] = [
    {
        id: 1,
        name: "Ana Souza",
        bio: "Desenvolvedora frontend apaixonada por UI/UX.",
        cpf: "12345678909",
        password: "senha123"
    },
    {
        id: 2,
        name: "Carlos Mendes",
        bio: "Engenheiro de software focado em backend.",
        cpf: "98765432100",
        password: "backend456"
    },
    {
        id: 3,
        name: "Juliana Ribeiro",
        cpf: "45678912366",
        password: "juliana789"
    },
    {
        id: 4,
        name: "Lucas Ferreira",
        bio: "Estudante de ciência da computação.",
        cpf: "74185296310",
        password: "lucas321"
    }
]