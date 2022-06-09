// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

 // primeiro parâmero do fetch: URL 
// segundo parâmetro do fetch: objeto contendo especificações
// 1º tipo de request(method) 2º formato da resposta (headers)

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => console.log(data));
};

window.onload = () => fetchJoke();