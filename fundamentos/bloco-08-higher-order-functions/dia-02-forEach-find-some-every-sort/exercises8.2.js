const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1-Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// function authorBornIn1947() {

//   return books.find((book) => book.author.birthYear === 1947).author.name;
// }

// console.log(authorBornIn1947())

// Retorne o nome do livro de menor nome.

// function smallerName() {
//   let nameBook;

//   books.forEach((book) => {
//     if (!nameBook || book.name.lenght < nameBook.lenght){
//       nameBook = book.name;
//     }
//   });

//   return nameBook;
// }

// function smallerName() {
//   let nameBook;
//   // escreva aqui o seu código

// for(let index = 0; index < books.name.length; index +=1){
//   if (books.name.length[index] < nameBook.length){
//     nameBook = books.name[index];
//   }

// }
//   // Variável nameBook que receberá o valor do menor nome;
//   return nameBook;
// }

function smallerName(array) {
  let nameBook = array[0].name;

  books.forEach((element) => {
    if (element.name.length < nameBook.length) {
      nameBook = element.name;
    }
  });
  return nameBook;
}

// console.log(smallerName())

function getNamedBook() {
  return books.find((element) => element.name.length === 26);
}

//console.log(getNamedBook())

// function getNamedBook() {
//   return books.find((book) => book.name.length === 26);
// }

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

// function booksOrderedByReleaseYearDesc() {
//   return books.sort((book1, book2) => book2.releaseYear - book1.releaseYear);
// }

// console.log(booksOrderedByReleaseYearDesc())

// 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   return books.every((param) => param.author.birthYear > 1900 && param.author.birthYear <= 2000);
// }

// console.log(everyoneWasBornOnSecXX())

// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const expectedResult = true;

// function everyoneWasBornOnSecXX() {
//   return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000);

// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

function authorUnique() {
  const birthYearConst = books[0].author.birthYear;
  let retorno;

 books.forEach((element) => {
    if (element.author.birthYear !== birthYearConst) {
    retorno = books.some((year1) => year1.author.birthYear === birthYear);
    }    
  });
  return retorno 
}

console.log(authorUnique());
