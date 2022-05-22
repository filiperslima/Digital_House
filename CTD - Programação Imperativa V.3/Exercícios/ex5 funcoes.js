function teste1(x,y) {
    return y - x
}
teste1(300,800)

function teste2(x,y) {
    return x * 2
    console.log(x)
    return x/2
}
teste2(10)
console.log(teste1(300,800))
console.log(teste2(10))

// funções simples
//1. Polegadas em centímetros
function inToCm (x) {
    return x * 2.54
}
console.log(inToCm (10))
// Recebe uma string e retorna uma url
function strToUrl (url) {
    return 'http://www.'+ url + '.com.br'
}
console.log(strToUrl("google"))

// Crie uma função que recebe uma string e retorna uma frase com !
function comExclamação (str) {
    return console.log(str + "!") //imagino que não seja uma boa prática colocar o console.log dentro do return... Irei usar apenas em alguns.

}
// calcula idade dos cachorros
function dogAge (x) {
    return console.log (x * 7)
}
dogAge(10)
// calcula o valor da hora de trabalho
function horaValor (x) {
    return console.log(x/160)
}
horaValor(5000)
function imc (peso, altura) {
    return console.log (peso / (altura*altura))
}
imc (70, 175)
// converter para maiúsula
function upperCase(x) {
    return console.log(x.toUpperCase())
}
upperCase("casa")
//typeof
function type(x) {
    return typeof(x)
}
console.log(type("a"))
//circunferência
function circunferencia(x) {
    return 2 * Math.PI * x;
  }
  console.log(circunferencia(2));
  