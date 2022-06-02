const products = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Holmustund",
    price: 999.99,
    oldPrice: 888.99,
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Fralov",
    price: 222.99,
    oldPrice: 121.99,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551907234-fb773fb08a2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Evertosomberg",
    price: 222.99,
    oldPrice: null,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1506898667547-42e22a46e125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Eurosofa",
    price: 222.99,
    oldPrice: null,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1619596662481-085e45d69762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Chaire blue ",
    price: 222.99,
    oldPrice: null,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    name: "Chair red",
    price: "222.99",
    oldPrice: null,
  },
];

export default defineEventHandler(() => ({ products, }) );
