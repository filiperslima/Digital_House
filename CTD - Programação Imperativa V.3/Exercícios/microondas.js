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
const tempoPipoca = 10;
const tempoMacarrao = 8;
const tempoCarne = 15;
const tempoFeijao = 12;
const tempoBrigadeiro = 8;
let pratoInexiste = false;

function microondas(x,y) {
    x = x.toLowerCase()
    console.log("Você escolheu o prato " + x + " com o tempo " + y)
    if (x == "pipoca") {
        if (y > 2 * tempoPipoca && y <= 3 * tempoPipoca) {
            console.log("A COMIDA QUEIMOU")
        }
        else if (y < tempoPipoca) {
            console.log("Tempo Insuficiente")
        }
        else if ( y > 3 * tempoPipoca) {
            console.log("KABUM")
        }
    }
    else if (x == "macarrão" || x == "macarrao")  {
    if (y > 2 * tempoMacarrao && y <= 3 * tempoMacarrao) {
        console.log("A COMIDA QUEIMOU")
    }
    else if (y < tempoMacarrao) {
        console.log("Tempo Insuficiente")
    }
    else if ( y > 3 * tempoMacarrao) {
        console.log("KABUM")
    }
    }
    else if (x == "carne")  {
    if (y > 2 * tempoCarne && y <= 3 * tempoCarne) {
        console.log("A COMIDA QUEIMOU")
    }
    else if (y < tempoCarne) {
        console.log("Tempo Insuficiente")
    }
    else if ( y > 3 * tempoCarne) {
        console.log("KABUM")
    }
}
    else if (x == "feijão" || x == "feijao")  {
    if (y > 2 * tempoFeijão && y <= 3 * tempoFeijão) {
        console.log("A COMIDA QUEIMOU")
    }
    else if (y < tempoFeijão) {
        console.log("Tempo Insuficiente")
    }
    else if ( y > 3 * tempoFeijão) {
        console.log("KABUM")
    }
}
    else if (x == "brigadeiro")  {
    if (y > 2 * tempoBrigadeiro && y <= 3 * tempoBrigadeiro) {
        console.log("A COMIDA QUEIMOU")
    }
    else if (y < tempoBrigadeiro) {
        console.log("Tempo Insuficiente")
    }
    else if ( y > 3 * tempoBrigadeiro) {
        console.log("KABUM")
    }
}
    else {
        console.log("Prato inexistente")
        pratoInexiste = true;

    }
    if (pratoInexiste == true) {
        console.log("Digite um prato correto")
    } 
    else {
        console.log("Prato pronto, bom apetite!!!")  
    }
}
microondas("macarrao",30)

