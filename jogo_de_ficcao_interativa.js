console.clear();
const prompt = require('prompt-sync')();

//granny

/*O jogo se passa em uma casa sombria e antiga, onde o jogador está mantido em cativeiro por uma criatura sobrenatural que visualmente aparenta ser uma mulher idosa, chamada pelo título do jogo, "Granny". O jogador então deve explorar a casa para encontrar itens que possam ajudá-lo a escapar em um período de até 5 dias, caso contrário, Granny o matará e o jogo acaba.*/

let itens = [];

let acoes = ['Procura', 'Corre', 'Abre porta', 'Sobe escada', 'Desce escada'];

//console.log(acoes[1]);

let dia = 1;

//Objetos
let granny = {
    ataque: 25,
    armadilha: 0
}

let jogador = {
    vida: 100,
    esconder: '',
    fugir: ''
}

//Funções
function ataque () {
    dia ++ 
    granny.armadilha += 2
    return (jogador.vida -= granny.ataque)
    
}

// console.log(ataque());
// console.log(dia);
// console.log(granny.armadilha);

console.log('Iniciar?  1- Sim.  2- Não.');

console.log();

let iniciar = +prompt('Escolha: ');

console.log();

if(iniciar === 1){
    console.log(`Você não pode fazer nenhum barulho, pois a Granny vai te achar, tente escapar!!!`) // inicio do jogo
} else {
    console.log('Que pena, Até Logo! '); 
}
console.log('Você está no quarto do andar superior, e no quarto tem um baú..\n\n1) Fugir.\n2) Verificar baú.'); // pergunta 1

console.log();

let resposta = +prompt('Escolha: '); // resposta pergunta 1

if(resposta === 1) {
    console.log(`\n${acoes[2]}, desce as escadas e a porta de entrada está trancada. Encontre a chave!!!`) // consequencia da resposta 1 = fugir.
}else {
    console.log(`A Granny escuta o barulho e te encontra`) // consequencia da resposta 1 = Verificar baú.
    ataque();
}

resposta = +prompt(`Vai para: 1)cozinha  2)porão?: `); // pergunta 2

console.log();

if(resposta === 1) {
    console.log(`${acoes[0]} , mas não encontra nada que possa ajudar!`); //consequencia da resposta 2 = se for para a cozinha.
}else {
    console.log(`${acoes[4]} vai até o porão, mas a Granny o encontra e ataca!`); //consequencia da resposta 2 = se for para porão.
    ataque();
}

resposta = +prompt('Vai para: 1)sala  2)banheiro?: '); // pergunta 3

console.log();

if(resposta === 1) {
    console.log(`Não encontra nada que possa ajudar!`); //consequencia da resposta 3 = se for para a sala.
}else {
    console.log(`${acoes[2]} do banheiro, mas a Granny ouve o barulho e o ataca novamente!`); //consequencia da resposta 3 = se for para o banheiro.
    ataque();
}

resposta = +prompt('Vai para: 1)sótao  2)corredor?: '); // pergunta 4

console.log();

if(resposta === 1) {
    console.log(`${acoes[3]}, mas não encontra nada que possa ajudar!`); //consequencia da resposta 4 = se for para o sótao.
}else {
    console.log(`${acoes[1]}, mas a Granny ouve o barulho e o ataca novamente!`); //consequencia da resposta 4 = se for para o corredor.
    ataque();
}

console.log('Agora só faltam o quarto da Granny e um armário que fica embaixo das escadas...')

resposta = +prompt('Vai para: 1)Quarto da Granny  2)Armário?: '); // pergunta final

console.log();

if(resposta === 1) {
    console.log(`Encontra a chave da porta de saida, mas acaba derrubando um vaso, fazendo com que a Granny vá até o quarto.. Ele se esconde embaixo da cama, espera ela sair e finalmente foge!`); 
}else {
    console.log(`${acoes[2]}, mas vários objetos caem fazendo muito barulho e a Granny o ataca e acabando com sua vida!\n#gameover#`); //consequencia da resposta 5 = final
    ataque();
}

console.log('dia: ', dia);
console.log(jogador.vida);
console.log(granny.armadilha);


