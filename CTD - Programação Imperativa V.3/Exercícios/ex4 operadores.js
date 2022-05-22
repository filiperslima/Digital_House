let nome = ["José da silva", "Carlos de Souza", "Aline Ferreira", "Ana Paula"]; //Poderia criar o sobrenome separado e no console.log exibir a concatenação de nome +' ' + sobrenome
let age = [27, 28, 33, 26];
let weight = [83.5, 80.1, 63.7, 55.0];
let height = [1.70, 1.76, 1.53, 1.62];
let plan = [true, true, false, true];

// console.log( nome[x] + " tem " + age[x] + " e seu índice de massa corporal é de " + imc) // Poderia realizar um por um, colocando o esta linha e o valor numérico de cada índice ou gerar uma função. Poderia fazer uma função com loop tendo nela um incremento para o X (mas ainda não aprendi sobre)

function IndiceMassaCorporal (x) {
    imc = (weight[x]/(height[x]*height[x]))
    console.log( nome[x] + " tem " + age[x] + " e seu índice de massa corporal é de " + imc)

}
IndiceMassaCorporal (1)
