// Filipe Rodrigues S. Lima && Iccaro Souza de Oliveira 

let arrayEntrada = [1, 2, 4, 8];
let soma = 0;
console.log(arrayEntrada[0]); //Pode ser removido. Botei apenas pra se assemelhar mais com o exercício.
 for(let i = 0; i<arrayEntrada.length-1; i++) {
    soma = arrayEntrada[i] + soma;
    console.log(`${soma} + ${arrayEntrada[i+1]}`);

 }