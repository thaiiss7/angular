export interface IMercado {
    id: number,
    name: string,
    description?: string,
    price: number,
    quantity: string,
    store: string
}

const MockProdutos: IMercado[] = [
    {
        id: 0,
        name: "Papel toalha",
        description: "Folhas duplas, alta absorção",
        price: 10,
        quantity: "2 rolos",
        store: "Jacomar"
    },
    {
        id: 1,
        name: "Manteiga",
        description: "Com sal",
        price: 14,
        quantity: "200 g",
        store: "Condor"
    },
    {
        id: 2,
        name: "Arroz",
        description: "Tipo 1, pacote tradicional",
        price: 25,
        quantity: "5 kg",
        store: "Max Atacadista"
    },
    {
        id: 3,
        name: "Feijão",
        description: "Carioca",
        price: 8,
        quantity: "1 kg",
        store: "Jacomar"
    },
    {
        id: 4,
        name: "Leite",
        description: "Integral",
        price: 6,
        quantity: "1 litro",
        store: "Condor"
    },
    {
        id: 5,
        name: "Café",
        description: "Torrado e moído",
        price: 18,
        quantity: "500 g",
        store: "Max Atacadista"
    },
    {
        id: 6,
        name: "Açúcar",
        description: "Refinado",
        price: 5,
        quantity: "1 kg",
        store: "Jacomar"
    },
    {
        id: 7,
        name: "Macarrão",
        description: "Espaguete",
        price: 4,
        quantity: "500 g",
        store: "Condor"
    },
    {
        id: 8,
        name: "Óleo de soja",
        description: "Tradicional",
        price: 7,
        quantity: "900 ml",
        store: "Max Atacadista"
    },
    {
        id: 9,
        name: "Detergente",
        description: "Neutro",
        price: 3,
        quantity: "500 ml",
        store: "Jacomar"
    },
    {
        id: 10,
        name: "Sabão em pó",
        description: "Para roupas",
        price: 12,
        quantity: "1 kg",
        store: "Condor"
    }
]

export default MockProdutos;