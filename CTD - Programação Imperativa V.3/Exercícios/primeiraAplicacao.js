// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
	
// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.

// const pessoa = [
//     {
//         altura: 1.22,
//         sexo: "F"
//     },
//     {
//         altura: 1.88,
//         sexo: "M"
//     },
//     {
//         altura: 1.62,
//         sexo: "F"
//     },
//     {
//         altura: 1.47,
//         sexo: "F"
//     },
//     {
//         altura: 1.41,
//         sexo: "M"
//     },
//     {
//         altura: 1.63,
//         sexo: "M"
//     },
//     {
//         altura: 1.62,
//         sexo: "F"
//     },
//     {
//         altura: 1.65,
//         sexo: "F"
//     },
//     {
//         altura: 1.51,
//         sexo: "F"
//     },
//     {
//         altura: 1.63,
//         sexo: "M"
//     },
//     {
//         altura: 1.52,
//         sexo: "F"
//     },
//     {
//         altura: 1.92,
//         sexo: "F"
//     },
//     {
//         altura: 1.41,
//         sexo: "F"
//     },
//     {
//         altura: 1.63,
//         sexo: "F"
//     },
//     {
//         altura: 1.79,
//         sexo: "M"
//     },
// ];

// function maxMin(h){
//     let maior=0, menor=5;
//     let quantidadeHomens = 0;
//     let quantidadeMulheres = 0;
//     let somaMulheres = 0;
//     for(let x=0;x<h.length;x++){
//         if (h[x].altura>maior){
//             maior = h[x].altura;
//         }else if(h[x].altura<menor){
//             menor = h[x].altura;
//         }
//         if (h[x].sexo == "M") {
//             quantidadeHomens++
//         }
//         else {
//             quantidadeMulheres++
//             somaMulheres = somaMulheres + h[x].altura 
//         }

//     }
//     console.log("A maior altura é "+ maior+" e a menor é "+menor);
//     console.log("A quantidade de homens é de " + quantidadeHomens);
//     console.log("A média da altura das mulheres é de " + somaMulheres/quantidadeMulheres)
// }
// maxMin(pessoa)
// // parte II


// const espectadores = [
//     {
//         idade:  25,
//         opiniao: "BOM"
//     },
//     {
//         idade:  21,
//         opiniao: "ÓTIMO"
//     },
//     {
//         idade:  30,
//         opiniao: "REGULAR"
//     },
//     {
//         idade:  28,
//         opiniao: "REGULAR"
//     },
//     {
//         idade:  18,
//         opiniao: "BOM"
//     },
//     {
//         idade:  22,
//         opiniao: "BOM"
//     },
//     {
//         idade:  27,
//         opiniao: "BOM"
//     },
//     {
//         idade:  24,
//         opiniao: "ÓTIMO"
//     },
//     {
//         idade:  52,
//         opiniao: "REGULAR"
//     },
//     {
//         idade:  35,
//         opiniao: "REGULAR"
//     },
//     {
//         idade:  32,
//         opiniao: "BOM"
//     },
//     {
//         idade:  21,
//         opiniao: "ÓTIMO"
//     },
//     {
//         idade:  27,
//         opiniao: "REGULAR"
//     },
//     {
//         idade:  22,
//         opiniao: "REGULAR"
//     },
//     {
//         idade:  35,
//         opiniao: "BOM"
//     },
// ];
// let media = 0;
// let quantidadeOtimo = 0;
//     let quantidadeRegular =0;
//     let quantidadeBom= 0;
// for (i = 0; i <espectadores.length; i++) {
    
//     if (espectadores[i].opiniao === "ÓTIMO") {
//     quantidadeOtimo++
//     media = espectadores[i].idade + media
//     }
//     else if (espectadores[i].opiniao == "REGULAR") {
//         quantidadeRegular++
//     }
//     else {
//         quantidadeBom++
//     }

// }
// console.log(media/quantidadeOtimo)
// console.log(quantidadeRegular)
// console.log((quantidadeBom*100)/espectadores.length)

// MINHA SEGUNDA APLICAÇÃO
 Aluno = function(Nome, Sexo, Ra, Notas, Turma ) {
this.Nome = Nome,
this.Sexo = Sexo,
this.Ra = Ra,
this.Notas = Notas,
this.Turma = Turma
this.media = function() {
    let media = this.Notas.reduce( function(acumulador, item) {
        return acumulador + item;
    });
    media = media/this.Notas.length;
    return media.toFixed(2)
}
 }

let alunos = [];
alunos.push(new Aluno("Filipe", "M", "1702", [10, 7, 9, 4], "Turma A - Noturna"))
alunos.push(new Aluno("Carla", "F", "1886", [8, 5, 9, 7], "Turma B - Noturna"))
alunos.push(new Aluno("Caio", "M", "1886", [8, 5, 10, 7], "Turma B - Noturna"))
alunos.push(new Aluno("José", "M", "1886", [6, 5, 1, 10], "Turma B - Noturna"))
alunos.push(new Aluno("Carla", "F", "1886", [7, 8, 9, 7], "Turma B - Noturna"))
console.log(alunos[0].media())

function mediaHomens(array) {
    var homens = array.filter(function (item) {
        return item.Sexo == "M" ;
})
    var mulheres = array.filter(function(item) {
        return item.Sexo =="F";
    });
let i= 0
let acumuladorHomens= 0
let acumuladorMulheres = 0
let mediaH = 0
let mediaM = 0
do {
    mediaH = homens[i].Notas.reduce( (valorInicial,valorAtual ) => (valorInicial+valorAtual)) + mediaH
    acumuladorHomens = homens[i].Notas.length + acumuladorHomens
    i= i+1
}
while (i<homens.length);
i=0
do {
    mediaM = mulheres[i].Notas.reduce( (valorInicial,valorAtual ) => (valorInicial+valorAtual)) + mediaM
    acumuladorMulheres = mulheres[i].Notas.length + acumuladorMulheres
    i= i+1
}
while (i<mulheres.length);
let mediaTotal = (mediaH+mediaM)/(acumuladorHomens+acumuladorMulheres)
console.log("Média total de homens é de " +mediaH/acumuladorHomens)
console.log("Média total de mulheres é de " + mediaM/acumuladorMulheres)
console.log("A média total é de " + mediaTotal)
}



// for (i = 0; i < homens.length; i++){
//     let arrayNova = []
//     arrayNova.push(homens[i].Notas)
//     media1 = homens[i].Notas.reduce( (valorInicial,valorAtual ) => (valorInicial+valorAtual))
//     console.log(media1/homens[i].Notas.length)
//     console.log(arrayNova)

// }

// let media2 = homens.Notas.reduce( function(acumulador, item) {
//         return acumulador + item;
//     });

// let media2 = homens.Notas.reduce( function(acumulador, item) {
//     return acumulador + item;
// });




mediaHomens(alunos)





























//     let notas = []
//     let notasHomens = homens.forEach(element => {
//         notas.push(element.notas.pop())
        
//     });
// console.log(homens)
// console.log(notas)
// //     let media = homens.reduce(function(total, item){// soma todos os valores do array

// //     return item.notas.push(item) + total.notas;
// // });
// // console.log(media)
// }

// console.log(mediaHomens(alunos))


// // CRIE UM METODO CONSTRUTOR ALUNO COM A PROPRIEDADES :
// // NOME
// // SEXO
// // ID
// // NOTAS
// // TURMA

// // DEPOIS CRIE UM ARRAY LISTA DE ALUNOS E CRIE UM OBJETO POR ALUNO

// // E APLIQUE OS EXERCICIOS DE MEDIA DAS AULAS PASSADAS 

// // MEDIA TOTAL DE NOTAS 

// // MEDIA DE ALUNOS HOMENS E MULHERES




// // console.log(mulheres);

// // media = mulheres.reduce(function(total, item){// soma todos os valores do array
// //     return item.altura +  total.altura;
// // })