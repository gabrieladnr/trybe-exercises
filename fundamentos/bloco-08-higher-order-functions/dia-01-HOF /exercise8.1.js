// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback("Pedro Guerra Soares"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   };
//   return employees;
// };

// const criaEmail = (nome) => {
//  return `${nome.replaceAll(' ', '_').toLowerCase()}@trybe.com`;
// };

// console.log(newEmployees(criaEmail))

// Desenvolva uma HOF que retorna o resultado de um sorteio. 
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma 
// função que checa se o número apostado é igual ao número sorteado.
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultadoSorteio = () => {

    const randomiza = Math.ceil(Math.random()*5);
    return randomiza;
}

