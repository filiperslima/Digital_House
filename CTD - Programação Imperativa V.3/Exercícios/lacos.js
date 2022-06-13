// for (let aux=1; aux<=5 ; aux++) {
//     console.log(aux + '- Olá Mundo');
// };

for (let aux=1; aux<=10 ; aux++) {
    if (aux % 2 == 1) {
        console.log (aux + ' é impar ')
    }
};

let peliculas = ["star wars","totoro","rocky","pulp fiction","la vida es bella"]
function converterAMaiusculas (array) {
    for (let indice = 0; indice < array.length ; indice++) {
        array[indice] = array[indice].toUpperCase()
    }
    return array
}
console.log(converterAMaiusculas(peliculas))

 let peliculas2 = ["frozen", "capitão américa", "corra", "a bela e a fera", "Vida"]
 function pasajeDeElementos(array1, array2) { 
     for ( let indice2 = array2.length; indice2 >0; indice2--) {
     array1.push(array2.pop().toUpperCase())
     }
     console.log(array2.length)
     return array1
 }
console.log(pasajeDeElementos(peliculas, peliculas2))
