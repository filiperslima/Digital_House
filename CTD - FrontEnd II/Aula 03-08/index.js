
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

let vencedorPartida = "";
let escolhaJogador = "";
let escolhaComputador = 0;


function start() {
    // checarVencedorPartida();
    checarVencedorFinal();
}
function capturarEscolhaJogador() {
    escolhaJogador= prompt("Escolha entre Pedra (0), Papel (1) ou Tesoura (2)");
    return tratarEscolha(escolhaJogador);
}

function capturarEscolhaComputador() {
    escolhaComputador = parseInt(Math.random() * (4 - 1)+1);
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
            variavel = Number(variavel)
            break;
    }
    return variavel
}
function checarVencedorPartida() {
    capturarEscolhaJogador();
    capturarEscolhaComputador();
    vencedorPartida = "";
    if (escolhaJogador == escolhaComputador){
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
       Parabéns ${vencedorAtual} pela vitória!!!
   `)
       }

    } while (pontosJogador<3 && pontosComputador <3)

}



start()

