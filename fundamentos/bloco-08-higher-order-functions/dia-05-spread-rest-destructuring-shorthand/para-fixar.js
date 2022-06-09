// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['abacaxi', 'uva', 'manga'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['laranja', 'morango', 'banana'];

// const fruitSalad = (fruit, additional) => {
//   return [...specialFruit, ...additionalItens]
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality } = person;
// console.log(nationality)



 const multiply = (number = 1, value = 1) => {
  return number * value;
};

//console.log(multiply(8));

const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person)); // João is Brazilian

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

//console.log(getPosition(-19.8157, -43.9542));


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água
