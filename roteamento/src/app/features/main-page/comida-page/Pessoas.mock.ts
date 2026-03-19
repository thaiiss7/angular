export interface IPessoa {
    name: string,
    email: string,
    document?: string,
    telefone?: string
}

const MockPessoas: IPessoa[] = [
    {
        name: "thais",
        email: "thais@gmail.com"
    },
    {
        name: "beca",
        email: "beca@gmail.com"
    }
]

export default MockPessoas;