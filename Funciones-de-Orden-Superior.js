//Ejercicio1
const numbers = [1, 2, 3, 4, 5];
const mapNumbers = numbers.map((i) => i * 2);
console.log(mapNumbers);

//Ejercicio2
const strings = ["hello", "world", "how", "are", "you"];
const mapStrings = strings.map((i) => {
  return i.length;
});

console.log(mapStrings);

//Ejercicio3

const people = [
  { name: "Alice", age: 25 },

  { name: "Bob", age: 30 },

  { name: "Charlie", age: 35 },

  { name: "Dave", age: 40 },
];

const personasMap = people.map((i) => {
  return i.age;
});
console.log(personasMap);

//Ejercicio 4
const people2 = [
  { name: "Alice", age: 25 },

  { name: "Bob", age: 17 },

  { name: "Charlie", age: 35 },

  { name: "Dave", age: 12 },
];

const personas18 = people2.map((i) => {
  if (i.age >= 18) {
    return i;
  }
});
console.log(personas18);

//Ejercicio5
const numeroMax = numbers.reduce((a, l) => console.log(l));