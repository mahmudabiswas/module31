// data access
const data = [{ id: 1, name: "abul", address: "kochu khet" }];
// console.log(data[0].name);

const products = {
  count: 50000,
  data: [
    { id: 1, name: "lenovo laptop", price: 650000 },
    { id: 2, name: "mac", price: 1650000 },
  ],
};
// console.log(products.data[1].price);

const user = {
  id: 50001,
  name: "soriful raj",
  address: {
    street: {
      first: "15/1/2",
      street: "poribag er goli",
      third: "no dorai",
    },
    city: "dhaka",
  },
};

console.log(user.address.street.street);
