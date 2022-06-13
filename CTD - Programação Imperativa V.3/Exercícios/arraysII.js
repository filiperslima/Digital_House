
// // map
// const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // console.log( valores[0] );

// // for (let i = 0; i < valores.length; i++) {
// //     console.log(valores[i]*2);
// // }

// let tabuada = valores.map(function (x) {
//     return x + ' - presente';
// });

// console.log(tabuada);
// console.log(valores);

// // filter - Realiza um loop e filtra os elementos com base na condição existente na callback.

// let novoValores = valores.filter(function (y) {
//     return y % 2 == 0;
// });
// console.log(novoValores);

// // reduce - percorre o array e retorna apenas um único valor. Essa pode ter dois parâmetros.
// // Precisa sempre utilizar o return

// let soma = novoValores.reduce(function (acumulador, valor) {
//     console.log(acumulador, valor)
//     return acumulador + valor;
// })
// console.log(soma)

// //forEach - Interar em uma array. Recebe uma callback e percorre a array sem retornar nada.
// valores.forEach(function (elemento) {
//     console.log(elemento + " x 2 = " + elemento * 2)
// })

// // 1 - 

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let somaValores = valores.reduce(function(acumulador, valor) {
    return acumulador + valor
})

console.log(somaValores)

let matriz = valores.map(function(x){
    console.log(x / somaValores)
    return x / somaValores
})
console.log(matriz)

let matrizDois = ["casa", "arvore", "carro"]
let numero = 4
function square(x,y) {
    var index = x.filter(function(item) {
        return item.length > y
    })
    return console.log(index)

}
// var index = matrizDois.filter(function (item) {
//    return item.length > numero
// });

// console.log(index)

console.log(square(matrizDois, 3))