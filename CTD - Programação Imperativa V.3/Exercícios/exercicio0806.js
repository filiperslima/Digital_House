// // Loop de pares
// function loopDePares(x) {
//     for( var i = 0; i<=100; i++) {
//         console.log(i)
//         let a = i+x
//         if (a % 2 == 0) {
//             console.log("A interação " + i + " mais o valor do parâmetro " + x + " resulta em " + a + " que é par" )
//         }
// }   
// }
// console.log(loopDePares(8))

// // loop 
// function loopDeImpares(x) {
//     for( var i = 0; i<=100; i++) {
//         console.log(i)
//         let a = i+x
//         if (a % 2 !== 0) {
//             console.log("A interação " + i + " mais o valor do parâmetro " + x + " resulta em " + a + " que é ímpar" )
//         }
// }   
// }
// console.log(loopDeImpares(8))

// function soma(x) {
//     var i = x;
//     let soma = x;
//     do {
//         i-=1
//         soma += i
//         console.log(soma)
//     }
//     while (i !== 0)
//     console.log("O resultado final foi " + soma)

// }
// console.log(soma(8))

// function newArray(x) {
// var i = 0;
// var array = []
// do  {
//     i+=1
//     console.log(array)
//     array.push(i)

// }
// while (i<=x)

// }
// console.log(newArray(10))

// // faz um length
// // ai faz um slice
// // pega e taca um push

// let string = "olá"
// a = string.length
// var y = 0
// var z = 1
// var newArray = []
// function split(x){
//     do {
//         newArray.push(x.slice(y,z))
//         y = y+1
//         z = z+1
//     }
//     while (z <= a)
//     console.log(newArray)

// }
// console.log(string.split())
// console.log(split(string))


// let array = [false,1,0,1,2,0,1,3,"a"]
// function moverZeros(x){
//     let zeroArray = x.filter(function(elemento){
//         return elemento === 0;
//     }
//     )
//     let outroArray = x.filter(function(elemento){
//         return elemento !== 0;
//     }
//     )
//     var novo = outroArray.concat(zeroArray)
//     console.log(novo)

// }
// moverZeros(array)

// let arrayUm = [1,2,3];
// let arrayDois = ['o','l','á'];
// console.log(arrayDois)
// function arrayHandler(a,b){
//     let i = 0
//     do {
//         console.log("Eu sou " + a[i] + " e eu sou " + b[i])
//         i++
//     }
//     while ( i <= a.length)
// }
// arrayHandler(arrayUm,arrayDois)


// function arrayObjects(x){
//     let i = 0
//     let arrayVazia = []
//     do {
//         arrayVazia.push({valor: i})
//         i++
//     }
//     while (i<=x)
//     console.log(arrayVazia)
// }
// arrayObjects(5)

var nome = "olá"
function arrayObjectsTwo(x,y){
    var oi = y
    let i = 0
    let arrayVazia = []
    do {
        var nome = y
        arrayVazia.push({x, y})
        i++
    }
    while (i<=x)
    console.log(arrayVazia)
}
arrayObjectsTwo(5, "olá")



