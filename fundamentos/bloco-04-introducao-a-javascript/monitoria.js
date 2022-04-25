 /*
Maria está aprendendo lógica de programação e recebeu o seguinte código:
  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
}
Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e imprima o resultado na tela..
*/ 

let soma = 0
for (let index = 1; index < 11; index += 1){
	soma = soma + index
}
console.log(soma);


/*
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Crie um algoritmo que guarde em um array todos os números inteiros ímpares desse intervalo.
Imprima o resultado do array na tela.
*/ 
let oddNumbers = [];

for( let i = 0; i <= 50; i += 1){
    if( i % 2 != 0){
        oddNumbers.push(i);
    }
}

console.log(oddNumbers);


/*
Escreva um algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array).
Encontre e imprima no console a posição index em que o elemento se encontra no array.
Caso não o encontre, imprima a mensagem "Elemento não encontrado"
*/

let array = [1,2,3,4,1];

for ( let i = 0; i < array.length; i += 1){

    if(array[i] == 1){
        console.log(i);
    }else{
        console.log("Elemento não encontrado!");
    }

}


// const numbers = [10, 8, 7, 6, 5, 76, 13, 1, 43, 201];
// console.table(numbers);
// console.log(numbers[9]);
// console.log(numbers.length);

for(let index = 0; index < numbers.length; index += 1){
  console.log(
    "Eu sou o index",
    index,
    "e meu valor no array é",
    numbers[index]
  );
}