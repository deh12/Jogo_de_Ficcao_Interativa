console.clear();
const prompt = require('prompt-sync')();
const colors = require("colors");

let iniciar = false;
let dia = 1

let jogador = {
    vida: 100,
    esconde: function(){
        console.log('Você fugiu da Granny!!!')
    }
}

let opcoes = ['Olhar Baú', 'Ir para outro comodo', 'Cozinha', 'Garagem', 'Sótão', 'Banheiro', 'Embaixo da escada', 'Corredor', 'Quarto 2', 'Quarto Granny']

let granny = {
    ataque: 20,
    
    ataque: function() {
        dia++;
        jogador.vida -= 20
        
    }
}


do{
    console.clear();
    console.log('O jogo se passa em uma casa sombria e antiga, onde o jogador está mantido em cativeiro por uma criatura sobrenatural que visualmente aparenta ser uma mulher idosa, chamada pelo título do jogo, "Granny". O jogador então deve encontrar a chave em algum comodo da casa...')
    console.log();
    let escolha = prompt('Pressione ENTER para iniciar: ');
    if(escolha == '') {
        iniciar = true;
} else if(escolha === 'n') {
    process.exit();
}

} while (iniciar == false);

console.log();

nome= prompt('Qual o seu nome? '.red);
console.log();
jogo();

function status () {
    console.log(`Nome: ${nome}`.blue, '|', `Energia: ${jogador.vida}`.blue , '|' ,` Dia: ${dia}º`.blue);
    console.log();
}

function jogo() {

for (let i = 100; jogador.vida > 0; jogador.vida -= 20) {


console.log();

status();
console.log(`${nome}, você está em um dos quartos, encontre a chave para fugir..\n[1] ${opcoes[0]}. \n[2] ${opcoes[1]}.`); 
console.log();

let resposta = +prompt('Escolha: ');
console.clear();


if(resposta === 1){
    console.log('Você fez muito barulho e a Granny te achou.!'.red)  // dano 1 vida 80
    granny.ataque();
    jogo();
    }else if(resposta === 2 ) {
        status();
        console.log(`Você está na sala, mas não encontra a chave.\nProcure em outro lugar..\n[1] ${opcoes[2]}. \n[2] ${opcoes[3]}.`)
        console.log();
        resposta = +prompt('Escolha: ');
        console.clear();
}


if(resposta === 1){
    console.log('Você fez muito barulho e a Granny te achou!'.red)  // dano 2 vida 60
    granny.ataque();
    jogo();
}else if(resposta === 2 ) {
    status();
    console.log(`A chave não está na garagem..\nProcure em outro lugar..\n[1] ${opcoes[4]}. \n[2] ${opcoes[5]}.`)
}

resposta = +prompt('Escolha: ');
console.clear();

if(resposta === 1){
    console.log('Você fez muito barulho e a Granny te achou!'.red) // dano 3 vida 40
    granny.ataque();
    jogo();
}else if(resposta === 2 ) {
    status();
    console.log(`A chave não está no banheiro..\nProcure em outro lugar..\n[1] ${opcoes[6]}. \n[2] ${opcoes[7]}.`)
}

resposta = +prompt('Escolha: ');
console.clear();

if(resposta === 1){
    console.log('Você fez muito barulho e a Granny te achou!'.red) // dano 4 vida 20
    granny.ataque();
    jogo();
}else if(resposta === 2 ) {
    status();
    console.log(`A chave não está no corredor..\nProcure em outro lugar..\n[1] ${opcoes[8]}. \n[2] ${opcoes[9]}.`)
}

resposta = +prompt('Escolha: ');
console.log();

if(resposta === 1){
    console.log('Você fez muito barulho e a Granny te achou!#GAME OVER'.bgRed) // último dano
    granny.ataque();
    process.exit();
    }else if(resposta === 2 ) {
    console.log('Você encontrou a chave e conseguiu fugir!'.bgBlue);
    process.exit()
}

}

}
