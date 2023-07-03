const validInput = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4,
};

const validOutput = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
};

const validProduct = {
    id: 6,
    name: "Martelo de Thor",
    price: "30 peças de ouro",
    orderId: 4,
  };

const productList = [
    {
      "id": 1,
      "name": "Pedra Filosofal",
      "price": "20 gold",
      "orderId": 1
    },
    {
      "id": 2,
      "name": "Lança do Destino",
      "price": "100 diamond",
      "orderId": 2
    },
    {
        "id": 3,
        "name": "Barba Bonita do Nico",
        "price": "10000 gold",
        "orderId": 3
    }
  ]

export default {
  validInput,
  validOutput,
  validProduct,
  productList
};
