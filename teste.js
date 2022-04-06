
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


let granny = {
    
    
    ataque: function() {
        dia++;
        jogador.vida -= 20
        
    }
}

function status () {
    console.log(`Nome: ${nome}`.blue, '|', `Energia: ${jogador.vida}`.blue , '|' ,` Dia: ${dia}º`.blue);
    console.log();
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

function jogo() {

for (jogador.vida = 100; jogador.vida > 0; jogador.vida -= 20) {


console.log();


console.log(`${nome}, você está em um dos quartos, encontre a chave para fugir..\n[1] Olhar Baú. \n[2] Ir para outro comodo.`); 
console.log();

let resposta = +prompt('Escolha: ');
console.clear();

status();
if(resposta === 1){
    console.log('Você fez muito barulho e a Granny te achou!\n'.red)  // dano 1 vida 80
    granny.ataque();
    jogo();
    //status();
    }else if(resposta === 2 ) {
    console.log('Você está na sala, mas não encontra a chave.\nProcure em outro lugar..\n[1] Cozinha. \n[2] Garagem.')
    console.log();

resposta = +prompt('Escolha: ');
console.clear();
}

// console.log();

// resposta = +prompt('Escolha: ');
// console.clear();

status();
if(resposta === 1){
    console.log('Você fez muito barulho e a Granny te achou!'.red)  // dano 2 vida 60
    granny.ataque();
    jogo();
    status();
}else if(resposta === 2 ) {
    console.log('A chave não está na garagem..\nProcure em outro lugar..\n[1] Sótão. \n[2] Banheiro.')
    resposta = +prompt('Escolha: ');
    console.clear();
}

// resposta = +prompt('Escolha: ');
// console.clear();

status();
if(resposta === 1){
    console.log('Você fez muito barulho e a Granny te achou!\n'.red) // dano 3 vida 40
    granny.ataque();
    jogo();
    //status();
}else if(resposta === 2 ) {
    console.log('A chave não está no banheiro..\nProcure em outro lugar..\n[1] Embaixo da escada. \n[2] Corredor.')
    resposta = +prompt('Escolha: ');
    console.clear();
}

// resposta = +prompt('Escolha: ');
// console.clear();

status();
if(resposta === 1){
    console.log('Você fez muito barulho e a Granny te achou!\n'.red) // dano 4 vida 20
    granny.ataque();
    jogo();
}else if(resposta === 2 ) {
    console.log('A chave não está no corredor..\nProcure em outro lugar..\n[1] Quarto 2. \n[2] Quarto Granny.')
    resposta = +prompt('Escolha: ');
    console.log();
}

status();
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