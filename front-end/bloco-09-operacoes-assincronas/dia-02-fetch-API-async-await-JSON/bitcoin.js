// function append(data) {
//   const ul = document.querySelector('ul');
//   const li = document.createElement('li');
//   const divNome = document.createElement('div');
  
//   divNome.innerHTML = data.id;
  
//   li.appendChild(divNome);
//   ul.appendChild(li);
// }

const urlAPI = 'https://api.coincap.io/v2/assets';

const fetchCoin = () => {
  // return fetch('https://api.coincap.io/v2/assets')
  // .then((response) => response.json())
  // .then((data)=> {
  //   `${data.name} ${data.symbol}`: data.priceUsd,
  // });
  
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  // append(myObject);
  
  fetch(urlAPI, myObject)
  .then(response => response.json())
  .then(data => console.log(data));
  // .then(coin => console.log())
};

window.onload = () => fetchCoin();