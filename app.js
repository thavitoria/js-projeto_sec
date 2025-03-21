let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo de Adivinhação';
 
let subtitulo = document.querySelector('p');
subtitulo.innerHTML = ' Escolha um número de 1 e 100';
 
exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
 
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100) + 1;
}
 
let numeroSecreto = gerarNumeroAleatorio();
console.log (numeroSecreto);  
 
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
 
function verificarChute() {
    let chute = parseInt (document.querySelector('input').value);
    console.log(chute  === numeroSecreto);
}
