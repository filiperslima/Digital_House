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
microondas("brigadeiro",10)


// 1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?

// 2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
// idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)

// 3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

// 4. Faça um programa para a leitura de duas notas de um aluno.  
//     A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
//     A mensagem “Aprovado com Distinção”, se a média for igual a 10;
//     A mensagem “Reprovado” se a média for menor de do que 7;

function maiorMenor(a,b,c) {
    // let menor = 0;
    // let maior = 0;
        if (a > b && a > c) {
            console.log("O maior número é " + a)
        }
        else if (b > a && b > c) {
            console.log("O maior número é " + b)
        }
        else {
            console.log("O maior número é " + c)
        }

}
maiorMenor(30,60,90)

function doarSangue(x) {
    if (x >= 18 && x <= 67) {
        console.log("Pode doar sangue")
    }
    else {
        console.log("Não pode doar sangue")
    }

}
doarSangue(10)

function positivoNegativo(x) {
    if (x > 0) {
        console.log("Número positivo")
    }
    else if (x < 0) {
        console.log("Número negativo")
    }
    else {
        console.log("O número é 0")
    }
}
positivoNegativo(-10)

function nota(x,y) {
    let media = (x+y)/2
    if (media >= 7 && media <10 ) {
        console.log("Aprovado")

    }
    else if (media == 10) {
        console.log("Aprovado com distinção")
    }
    else {
        console.log("Reprovado")
    }
}
nota(10,10)