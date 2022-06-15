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