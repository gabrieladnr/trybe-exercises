// // Obtenha o valor "Serviços" do array menu :

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1] ;
// console.log(menuServices);

// //Procure o índice do valor "Portfólio" do array menu :

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu[2];
// console.log(indexOfPortfolio);

// // Adicione o valor "Contato" no final do array menu :
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push("Contato");
// console.log(menu);

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for (let index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index]);
//   }

// // Utilize o for/of para imprimir os elementos da lista names com o console.log() :

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for(let name of names){
//     console.log(name)
// }



// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for(let number of numbers){
//     console.log(number)
// }


// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0

// for (let i = 0; i < numbers.length; i += 1) {
//   sum += numbers[i]; 
// }
// console.log(sum);

// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0
// let media = 0

// for (let i = 0; i < numbers.length; i += 1) {
//   sum += numbers[i];
//   media = (sum/10);
// }
// console.log(media);


// 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem:
// "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0
// let media = 0

// for (let i = 0; i < numbers.length; i += 1) {
//   sum += numbers[i];
//   media = (sum/10);
// }

// if (media > 20){
//   console.log("valor maior que 20");
// } else {
//   console.log("valor menor ou igual a 20");
// }

// 5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 200, 2, 300, 35, 27];

// let maiorValor = numbers [0]; // variável que armazena inicialmente o valor do PRIMEIRO ITEM do array, simbolizdo pela posição -numbers[0]. isso é interessante pois o código fica mais geral

// for(let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] > maiorValor) {
//     maiorValor = numbers[index];
//   }
// }
// console.log(maiorValor);


// 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [1, 5, 9, 3, 19, 70, 8, 200, 2, 300, 35, 27];
// let impar = 0; 

// for(let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] % 2 !== 0) {
//     impar += 1;
//   }
// }

// if (impar === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(impar);
// }


// 7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;


// let numbers = [1, 5, 9, 3, 19, 70, 8, 200, 2, 300, 35, 27];

// let menorValor = numbers [0]; // variável que armazena inicialmente o valor do PRIMEIRO ITEM do array, simbolizdo pela posição -numbers[0]. isso é interessante pois o código fica mais geral

// for(let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] < menorValor) {
//     menorValor = numbers[index];
//   }
// }
// console.log(menorValor);

// 8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let arrayUmVinteCinco = [];

// for (let index = 1; index <= 25; index += 1) {
//   arrayUmVinteCinco.push(index);
// }

// console.log(arrayUmVinteCinco);

// // 9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// let divideDois = []

// for (let index = 0; index < arrayUmVinteCinco.length; index += 1) {
//   divideDois.push(arrayUmVinteCinco[index] / 2);
//   }
// console.log(divideDois);