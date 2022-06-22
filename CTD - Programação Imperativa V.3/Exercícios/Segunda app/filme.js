module.exports =  function(array) {
        let tamanhoTotal = array.length
        var quantidadeOtimo = array.filter(function (item) {
            return item.opiniao == "ÓTIMO" ;
    });
    console.log(quantidadeOtimo)
    console.log(quantidadeOtimo.length)
    let mediaOtimo = 0
    let i = 0
    do {
        mediaOtimo = quantidadeOtimo[i].idade + mediaOtimo;
        i++
    }
    while(i<quantidadeOtimo.length)
   console.log("A média de idades de pessoas que respondeu ótimo é " + mediaOtimo/quantidadeOtimo.length)
   
    var mediaRegular = array.filter(function (item) {
        return item.opiniao == "REGULAR" ;
});
    console.log("A quantidade de pessoas que respondeu Regular é " + mediaRegular.length)

    var quantidadeBom = array.filter(function (item) {
        return item.opiniao == "BOM";
});
console.log("A porcentagem de pessoas que respondeu Bom é de " +(quantidadeBom.length*100)/tamanhoTotal + "%")


    }


//acessa os espectadores e retorna conjunto de idades, essas  coisas.