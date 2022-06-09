// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.
// Dica: use spread operator.

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
//   console.log(rectangle[0] * rectangle[1]);
// });

// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest.

const number1 = [1, 2, 3, 4, 5, 6, 7, 6, 8, 4, 6, 8]

function sum (...numbers){ 
  return numbers.reduce(((acc, number) => 
    acc + number), 0);
}

console.log(sum(1,2,3))

