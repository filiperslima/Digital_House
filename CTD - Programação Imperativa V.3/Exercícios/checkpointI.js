// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


let pipoca = "Pipoca";
let tempoPipoca = 10;
let macarrao = "Macarrão";
let tempoMacarrao = 8;
let carne = "Carne";
let tempoCarne = 15;
let feijao = "Feijão";
let tempoFeijao = 12;
let brigadeiro = "Brigadeiro";
let tempoBrigadeiro = 8;

function menu(x, y) {

    if (x != "Pipoca" && x != "macarrao" && x != "carne") {
        console.log("stop")

    }
    console.log("Você escolheu o prato " + x + ". Com o tempo de preparo " + y)
    if (x == pipoca && y > 2 * tempoPipoca && y < 3 * tempoPipoca) {
        console.log("A COMIDA QUEIMOU")
    }
    else if (x == pipoca && y < tempoPipoca) {
        console.log("Tempo Insuficiente")
    }
    else if (x == pipoca && y > 3 * tempoPipoca) {
        console.log("KABUM")
    }

    if (x === macarrao && y > 2 * tempoMacarrao && y < 3 * tempoMacarrao) {
        console.log("A COMIDA QUEIMOU")
    }
    else if (x === macarrao && y < tempoMacarrao) {
        console.log("Tempo Insuficiente")
    }
    if (x == macarrao && y > 3 * tempoMacarrao) {
        console.log("KABUM")
    }
    if (x == carne && y > 2 * tempoCarne && y < 3 * tempoCarne) {
        console.log("A COMIDA QUEIMOU")
    }
    else if (x == carne && y < tempoCarne) {
        console.log("Tempo Insuficiente")
    }
    else if (x == carne && y > 3 * tempoCarne) {
        console.log("KABUM")
    }
    if (x == feijao && y > 2 * tempoFeijao && y < 3 * tempoFeijao) {
        console.log("A COMIDA QUEIMOU")
    }
    else if (x == feijao && y < tempoFeijao) {
        console.log("Tempo Insuficiente")
    }
    else if (x == feijao && y > 3 * tempoFeijao) {
        console.log("KABUM")
    }
    if (x == brigadeiro && y > 2 * tempoBrigadeiro && y < 3 * tempoBrigadeiro) {
        console.log("A COMIDA QUEIMOU")
    }
    else if (x == brigadeiro && y < tempoBrigadeiro) {
        console.log("Tempo Insuficiente")
    }
    else if (x == brigadeiro && y > 3 * tempoBrigadeiro) {
        console.log("KABUM")
    }

    console.log("Prato pronto, bom apetite")
}
console.log(menu("macarrao", 40))




// let arroz = "Arroz";
// let tempoArroz = 10;
// let feijao = "Feijão";
// let tempoFeijao = 12;
// var erro = "erro";
// if (erro == feijão || erro == arroz) {
//     console.log("digite o texto... ")
// }
// else {
//     console.log("Comida inválida")
// }
