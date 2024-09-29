// console.log("Hello, world!");

// let name = "Alice";
// const age = 30;

// function abc() {
//   console.log(`Hello, ${name}!`);
//   // print(f"hello, {name}!")
// }

// abc();

// function greet(your_name) {
//   console.log(`Hello, ${your_name}!`);
// }

// greet("Bob");

// const greet2 = (your_name) => {
//   console.log(`Hello, ${your_name}!`);
// };

// //json
// let person = {
//   name: "Alice",
//   age: 30,
//   isAdult: true,
// };

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.isAdult);

//async avascript

async function getData() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  console.log(data);
}

const getData2 = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  console.log(data);
};

const axios = require("axios");

const getData3 = async () => {
  const response = await axios.get("https://json.link/dFgqQpgqZC.json");
  console.log(response);
};

getData3();
