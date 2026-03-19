export interface IComida {
    id: number,
    name: string,
    description?: string,
    price: number,
    portion: string
}

const MockComidas: IComida[] = [
    {
        id: 0,
        name: "Sushi combinado",
        price: 30,
        portion: "10 peças"
    },
    {
        id: 1,
        name: "Hambúrguer Clássico",
        description: "Pão, carne bovina, queijo, alface e tomate",
        price: 25.9,
        portion: "1 unidade"
  },
  {
        id: 2,
        name: "Pizza Margherita",
        description: "Molho de tomate, mussarela e manjericão",
        price: 49.9,
        portion: "8 fatias"
  },
  {
        id: 3,
        name: "Batata Frita",
        description: "Porção crocante com sal",
        price: 15.0,
        portion: "300g"
  },
  {
        id: 4,
        name: "Coxinha",
        description: "Frango desfiado com catupiry",
        price: 7.5,
        portion: "1 unidade"
  },
  {
        id: 5,
        name: "Açaí na Tigela",
        description: "Açaí com banana e granola",
        price: 18.9,
        portion: "400ml"
  },
  {
        id: 6,
        name: "Refrigerante",
        price: 6.0,
        portion: "350ml"
  },
  {
        id: 7,
        name: "Suco Natural de Laranja",
        description: "Feito na hora",
        price: 10.0,
        portion: "500ml"
  },
  {
        id: 8,
        name: "Prato Feito (PF)",
        description: "Arroz, feijão, carne, salada e batata",
        price: 22.0,
        portion: "1 prato"
  },
  {
        id: 9,
        name: "Lasanha à Bolonhesa",
        description: "Carne moída, molho de tomate e queijo",
        price: 28.5,
        portion: "1 porção"
  },
  {
        id: 10,
        name: "Salada Caesar",
        description: "Alface, frango grelhado, croutons e molho caesar",
        price: 19.9,
        portion: "1 tigela"
  }
]

export default MockComidas;