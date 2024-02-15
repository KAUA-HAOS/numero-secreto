let listaDeNumeroSorteado = [];
let numeroLimite = 10


 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 100';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa' 
        let mensagemTentativas = `parabems você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
        else {
            if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o número secreto e menor');
             } else {
            exibirTextoNaTela('p', 'o número secreto e maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;

if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumeroSorteado = []
}

   if (listaDeNumeroSorteado.includes(numeroEscolido)){
    return gerarNumeroAleatorio();
   } else {
    listaDeNumeroSorteado.push(numeroEscolido);
    console.log(listaDeNumeroSorteado);
    return numeroEscolido;
   }

}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}
