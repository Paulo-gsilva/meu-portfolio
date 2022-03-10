let data;
 
function get(url){
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;
}

function createLineBtc(price){
    const p = document.createElement('p');
    const h1 = document.querySelector('.btc');

    p.innerText = `R$ ${price}`;
    h1.appendChild(p);
}

function createLineEth(price){
    const p = document.createElement('p');
    const h1 = document.querySelector('.eth');

    p.innerText = `R$ ${price}`;
    h1.appendChild(p);
}

function createLineSol(price){
    const p = document.createElement('p');
    const h1 = document.querySelector('.sol');

    p.innerText = `R$ ${price}`;
    h1.appendChild(p);
}

function createLineSlp(price){
  const p = document.createElement('p');
  const h1 = document.querySelector('.slp');

  p.innerText = `R$ ${price}`;
  h1.appendChild(p);
}

function createLineCake(price){
  const p = document.createElement('p');
  const h1 = document.querySelector('.cake');

  p.innerText = `R$ ${price}`;
  h1.appendChild(p);
}

function createLineBnb(price){
  const p = document.createElement('p');
  const h1 = document.querySelector('.bnb');

  p.innerText = `R$ ${price}`;
  h1.appendChild(p);
}

function btc(){
    let usuarios;
    data = get("https://api.bitpreco.com/btc-brl/ticker");
    usuarios = JSON.parse(data);
    createLineBtc(usuarios.last.toFixed(2));
}

function sol(){
    let usuarios;
    data = get("https://api.bitpreco.com/sol-brl/ticker");
    usuarios = JSON.parse(data);
    createLineSol(usuarios.last.toFixed(2))
}

function eth(){
    let usuarios;
    data = get("https://api.bitpreco.com/eth-brl/ticker");
    usuarios = JSON.parse(data);
    createLineEth(usuarios.last.toFixed(2))
}

function slp(){
    let usuarios;
    data = get("https://api.bitpreco.com/slp-brl/ticker");
    usuarios = JSON.parse(data);
    createLineSlp(usuarios.last.toFixed(2))
}

function cake(){
    let usuarios;
    data = get("https://api.bitpreco.com/cake-brl/ticker");
    usuarios = JSON.parse(data);
    createLineCake(usuarios.last.toFixed(2))
}

function bnb(){
    let usuarios;
    data = get("https://api.bitpreco.com/bnb-brl/ticker");
    usuarios = JSON.parse(data);
    createLineBnb(usuarios.last.toFixed(2))
}

export default function callAll(){
    btc();
    eth();
    sol();
    slp();
    cake();
    bnb();
}