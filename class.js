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

class Product {
  country = "bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new Product("deem");
// console.log(lenovo);
// lenovo.speak("oba kita kaw");

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture(talk) {
    console.log(`sir is teaching math ${talk} `);
  }
}

const sir = new Teacher("ali", "math");
console.log(sir);
sir.lecture("also talking");
