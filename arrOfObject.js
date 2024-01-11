const product = [
  {
    id: 1,
    name: "lenovo",
    prize: 35000,
    id: 2,
    name: "hp",
    prize: 45000,
    id: 3,
    name: "mac2",
    prize: 15600000,
    id: 4,
    name: "mac",
    prize: 1400000,
  },
];

// const singleProduct = product.map((p) => p.prize);
// console.log(singleProduct);
// const prize = product.forEach((p) => console.log(p.name.includes("l")));

// filter
// const expensive = product.filter((p) => p.prize > 3);
// console.log(expensive);

// find

// const affortable = product.find((p) => p.prize > 3000);
// console.log(affortable);

// reduce

const re = product.reduce((n, p) => n + p.name, 10);
console.log(re);
