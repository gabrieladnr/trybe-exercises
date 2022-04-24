/*  Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: 
{ area: 0, perimetro: 0 } 
perimetro = (base *2) + (altura * 2)
area = base * altura
*/
/* Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: 
{
 pares: 0, 
 ímpares: 0 
} 
*/
/*  Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word. 

Valor de teste: 'trybe' e 'be'
valor esperado no retorno da função: true
Dica: Use o SPLIT. */

// let player = {
//     name:'Marta',
//     lastName:'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 },
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
// }

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(player);

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes ');
// let a = 5;
// let b = 2;
// console.log(a);
// 5
// a += b;
// console.log(a);
// 7
// b -= a;
// console.log(b);

// let eu = ['Alguém da Trybe', ' que é super legal'];

// let string = eu[0] + eu[1] + '!';

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   }
  

// //   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 

// //   console.log("Bem-vinda, " + info.personagem)

// // //   Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 

// info.recorrente = "Sim";
// console.log(info);

// Faça um for/in que mostre todas as chaves do objeto.

// for (let index in info) {
//     console.log(index, info[index]);
// }

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. 

// for (let index in info) {
//     console.log(info[index]);
// }


//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };
  
//   for (let properties in info) {
//          console.log(info[properties] + ' e ' + info2[properties]);
//     }
  
    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
        ],
      };


    //   6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: 
    // "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".



      // console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo + ".");

    // 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
    // {
    //     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    //     autor: 'JK Rowling',
    //     editora: 'Rocco',
    //   }