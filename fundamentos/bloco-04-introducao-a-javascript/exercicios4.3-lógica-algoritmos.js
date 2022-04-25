// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
/// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 10;

for (let index = 10; index > 0; index -= 1) {
  fatorial = fatorial * index;
}
console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "açaí";
let invertida = "";

for (let index = word.length - 1; index >= 0; index -= 1) {
  invertida += word[index];
}
console.log(invertida);

// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ["java", "javascript", "python", "html", "css"];

let menorPalavra = array[0];
let maiorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}

console.log(maiorPalavra);
console.log(menorPalavra);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo.
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// function maiorPrimo() {
//   let maiorPrimo = 0;

//   for (let index = 50; index > 2; index -= 1) {
//     if (
//       index % 2 !== 0 &&
//       index % 3 !== 0 &&
//       index % 5 !== 0 &&
//       index % 7 !== 0
//     ) {
//       maiorPrimo = index;
//       console.log(maiorPrimo);
//       return;
//     }
//   }
// }

// maiorPrimo();

function maiorPrimo(num) {
  let maiorPrimo = 0;

  for (let index = num; index > 2; index -= 1) {
    let contador = 0;
    for (let i = index - 1; i > 1; i -= 1) {
      //o for de dentro começando pelo index -1 faz com que o num (paramentro) seja sempre dividido pelo numero seguinte a ele, e não por ele mesmo, já que ele por ele mesmo teria resto 0
      // o for de baixo vai até 1 pra limitar a condição de teste pois todo numero é divisivel por 1
      if (index % i === 0) {
        contador += 1;
        break; // break sai do for de dentro
      }
    }
    if (contador === 0) { // se ele sair para essa condição, significa que o numero é primo
      return (maiorPrimo = index);
    }
  }
}

console.log(maiorPrimo(4000));


