
// let nomeRecebido = prompt("Insira seu nome: ");

// alert("Seja bem-vindo: " +nomeRecebido);

// let retorno = confirm("Concorda ter 18+ anos?");
// console.log(retorno);

// if(retorno) {
//     alert("Continue utilizando."); 
// }else {
//     alert("Conteúdo bloqueado.")
// }

/**     Jogo Pedra Papel tesoura.
 * 1 capturar escolha do jogador: prompt
 * 2 capturar escolha da mátquina: math
 * 3 testes condicionais
 */

// let vencedorPartida = "";
let escolhaJogador = "";
let escolhaComputador = 0;
function start() {
    // checarVencedorPartida();
    checarVencedorFinal();
}
function capturarEscolhaJogador() {
    escolhaJogador= prompt("Escolha entre Pedra (0), Papel (1) ou Tesoura (2)");
    if (!escolhaJogador || escolhaJogador>2 || escolhaJogador<0) {
        alert("O valor inserido não foi identificado. Escolheremos um número aleatório para você nesta partida. \nPor favor, verifique o valor inserido da próxima vez antes de enviar.")
        escolhaJogador = parseInt(Math.random() * (3 - 1)+1).toString();
    }
    console.log(escolhaJogador)
    return tratarEscolha(escolhaJogador);
}

function capturarEscolhaComputador() {
    escolhaComputador = parseInt(Math.random() * (3 - 1)+1);
    return escolhaComputador
}
function tratarEscolha(variavel) { //deu certo
    variavel = variavel.toUpperCase();
    switch (variavel) {
        case "PEDRA":
            variavel = 0;
            break;
        case "PAPEL":
            variavel = 1;
            break;
        case "TESOURA":
            variavel = 2;
            break;
        default:
            variavel
            break;
    }
    return Number(variavel)
}
function checarVencedorPartida() {
    capturarEscolhaJogador();
    capturarEscolhaComputador();
    let vencedorPartida = "";
    if (Number(escolhaJogador) == escolhaComputador){
        alert("Opa, deu empate nessa partida")
        return vencedorPartida = "";
    }
    else if (escolhaJogador-escolhaComputador == -2 || escolhaJogador-escolhaComputador == 1) {
        alert("Ihhh, o humano ganhou")
        return vencedorPartida = "JOGADOR"
    }
    else {
        alert("HAHAAii, O robô ganhou!!")
        return vencedorPartida = "COMPUTADOR"
    }
}
function checarVencedorFinal() {
    let pontosJogador = 0;
    let pontosComputador = 0;
    do {
        let vencedorAtual = checarVencedorPartida();
        if(vencedorAtual == "JOGADOR") {
        pontosJogador++
        alert("Pontos jogador corresponde a: " +pontosJogador + " Pontos computador está em: " +" "+pontosComputador )
       } else if (vencedorAtual == "COMPUTADOR") {
        pontosComputador++
        alert("Pontos jogador corresponde a: " +pontosJogador + " Pontos computador está em: " + " " +pontosComputador )
       }
       else {
        alert("Como deu empate, os pontos permanecem em: " +pontosJogador + " JOGADOR E " +pontosComputador + " COMPUTADOR")
       }
       if (pontosJogador == 3 || pontosComputador == 3) {
       alert(`Resultado final: \n
       JOGADOR: ${pontosJogador} \n
       COMPUTADOR: ${pontosComputador} \n
       Parabéns, ${vencedorAtual}, pela sua vitória!!!
   `)
       }
    } while (pontosJogador<3 && pontosComputador <3)
}
start()

