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
const numeroMax = numbers.reduce((prev, sigu) => {
  return prev[1] > sigu[1] ? prev : sigu;
});
console.log(numeroMax);

//Ejercicio6
const nombre = ["Luis"];
const invertirNombre = nombre.reverse();
console.log(invertirNombre);

//Ejercicio7
const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const soloPares = numerosPares.filter((numero) => numero % 2 === 0);
console.log(soloPares);

//Ejercicio8
// let palabrasAleatorias = ["hola","casa","avion","ordenador"];
// function palabrasLargas(palabrasAleatorias, n){
//   return palabrasAleatorias.filter(palabra => palabra.length > n);
// }

// console.log(palabrasLargas(5));

//Ejercicio9
const arrayPalabras = ["Luis", "Barco", "Vaca", "Choza"];
const encontrarPalabra = arrayPalabras.find((d) => d == "c");
console.log(encontrarPalabra);

//Ejercio 10
function contarVocales(nombre) {
  const vocales = "aeiou";
  let count = 0;
  for (let i = 0; i < nombre.length; i++) {
    if (vocales.includes(nombre[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(contarVocales("Luis"));

//Ejercicio11
const arrayElementos = ["Caca", " Hola Mundo", "Avion"];
const encontrarElemento = arrayElementos.find((d) => {});

console.log(encontrarElemento);

//Ejercicio 12
function calcularCirculo(radio) {
  return Math.PI * radio * 2;
}

console.log(calcularCirculo(2));

//Ejercicio 13
function elevate(x, y) {
  return x ** y;
}

console.log(elevate(5, 6));

//Ejercicio 14

//Ejercicio 15
function fechaIngles() {
  const intl = new Intl.DateTimeFormat("ingl", { weekday: "long" });
  return [...Array(7)].map((day) => {
    intl.format(new Date(1973, 0, day + 1));
  });
}

console.log(fechaIngles());

//Ejercicio 16
