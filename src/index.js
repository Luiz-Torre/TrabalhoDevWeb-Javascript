import {Loja} from './script.js';

import 'bootstrap/dist/css/bootstrap.min.css'

const array = [
    { nome: 'Spoleto', tipo: 'Fast Food', descricao: 'Restaurante de comida italiana de fast food', cnpj: '12345678911111', image: 'images/spoletoimagem.png' },
    { nome: 'Lupo', tipo: 'Moda', descricao: 'Uma das maiores redes de pequenas vestimentas do Brasil', cnpj: '12345678922222', image: '/images/lupoimagem.png' },
    { nome: 'BaccioDiLatte', tipo: 'Gastronomia', descricao: 'Uma das maiores redes de gellato italiano do Brasil', cnpj: '12345678933333', image: '/images/bacciodilatteimagem.png' },
];

const arrayObjetos = []

for (let i of array) {
    let aux = new Loja();
    for (let j of Object.keys(i)) {
        aux[j] = i[j];
    }
    arrayObjetos.push(aux)
}

arrayObjetos.map(function (element) { 
    let organizador = document.createElement('div');
    organizador.className = 'col-xs-12 col-sm-3 col-md-3 col-lg-3'
    let card = document.createElement('div')
    card.className = 'card mb-3 ml-5 mr-5';
    let imagemcard = document.createElement('img');
    imagemcard.src = element.image;
    imagemcard.alt = element.nome;
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    let titlecard = document.createElement('h5');
    titlecard.innerText = element.nome;
    titlecard.className = 'card-title';
    let alinhador = document.createElement('div');
    alinhador.className = 'text-center';
    let tipo = document.createElement('p');
    tipo.innerText = element.tipo;
    tipo.className = 'text-secondary font-weight-bold';
    let descricaocard = document.createElement('p')
    descricaocard.innerText = 'Cnpj da empresa : ' + element.cnpj;
    descricaocard.className = 'text-secondary card-text text-justify';
    let descricaocard2 = document.createElement('p')
    descricaocard2.innerText = element.descricao;
    descricaocard2.className = 'card-text text-justify';

    organizador.appendChild(card)
    card.appendChild(imagemcard);
    card.appendChild(cardBody);
    cardBody.appendChild(alinhador);
    alinhador.appendChild(titlecard);
    alinhador.appendChild(tipo);
    cardBody.appendChild(descricaocard)
    cardBody.appendChild(descricaocard2)
    $("grupodecards").append(organizador)

 })



