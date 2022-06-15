// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
	
// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.

const pessoa = [
    {
        altura: 1.22,
        sexo: "F"
    },
    {
        altura: 1.88,
        sexo: "M"
    },
    {
        altura: 1.62,
        sexo: "F"
    },
    {
        altura: 1.47,
        sexo: "F"
    },
    {
        altura: 1.41,
        sexo: "M"
    },
    {
        altura: 1.63,
        sexo: "M"
    },
    {
        altura: 1.62,
        sexo: "F"
    },
    {
        altura: 1.65,
        sexo: "F"
    },
    {
        altura: 1.51,
        sexo: "F"
    },
    {
        altura: 1.63,
        sexo: "M"
    },
    {
        altura: 1.52,
        sexo: "F"
    },
    {
        altura: 1.92,
        sexo: "F"
    },
    {
        altura: 1.41,
        sexo: "F"
    },
    {
        altura: 1.63,
        sexo: "F"
    },
    {
        altura: 1.79,
        sexo: "M"
    },
];
// console.log(pessoa[0].altura)


// function maiorMenor() {
// let i = 0
// let maiorQ = pessoa[i].altura
//     do {
//         if (maiorQ > pessoa[i].altura) {
//         }
//         else {
//             maiorQ = pessoa[i].altura
//         }
//     i++

//     } while (i<=pessoa.length)
// };

// console.log(maiorMenor(pessoa))


function maxMin(h){
    let maior=0, menor=5;
    let quantidadeHomens = 0;
    let quantidadeMulheres = 0;
    let somaMulheres = 0;
    for(let x=0;x<h.length;x++){
        if (h[x].altura>maior){
            maior = h[x].altura;
        }else if(h[x].altura<menor){
            menor = h[x].altura;
        }
        if (h[x].sexo == "M") {
            quantidadeHomens++
        }
        else {
            quantidadeMulheres++
            somaMulheres = somaMulheres + h[x].altura 
        }

    }
    console.log("A maior altura é "+ maior+" e a menor é "+menor);
    console.log("A quantidade de homens é de " + quantidadeHomens);
    console.log("A média da altura das mulheres é de " + somaMulheres/quantidadeMulheres)
}
maxMin(pessoa)
// parte II


const espectadores = [
    {
        idade:  25,
        opiniao: "BOM"
    },
    {
        idade:  21,
        opiniao: "ÓTIMO"
    },
    {
        idade:  30,
        opiniao: "REGULAR"
    },
    {
        idade:  28,
        opiniao: "REGULAR"
    },
    {
        idade:  18,
        opiniao: "BOM"
    },
    {
        idade:  22,
        opiniao: "BOM"
    },
    {
        idade:  27,
        opiniao: "BOM"
    },
    {
        idade:  24,
        opiniao: "ÓTIMO"
    },
    {
        idade:  52,
        opiniao: "REGULAR"
    },
    {
        idade:  35,
        opiniao: "REGULAR"
    },
    {
        idade:  32,
        opiniao: "BOM"
    },
    {
        idade:  21,
        opiniao: "ÓTIMO"
    },
    {
        idade:  27,
        opiniao: "REGULAR"
    },
    {
        idade:  22,
        opiniao: "REGULAR"
    },
    {
        idade:  35,
        opiniao: "BOM"
    },
];
let media = 0;
let quantidadeOtimo = 0;
    let quantidadeRegular =0;
    let quantidadeBom= 0;
for (i = 0; i <espectadores.length; i++) {
    
    if (espectadores[i].opiniao === "ÓTIMO") {
    quantidadeOtimo++
    media = espectadores[i].idade + media
    }
    else if (espectadores[i].opiniao == "REGULAR") {
        quantidadeRegular++
    }
    else {
        quantidadeBom++
    }

}
console.log(media/quantidadeOtimo)
console.log(quantidadeRegular)
console.log((quantidadeBom*100)/espectadores.length)

// function novoEspectador(a,b) {
//     let arrayEspectador = []
//  arrayEspectador.push(new espectador(b, a)) }
//  console.log(novoEspectador(15,"BOM"))


