alunos = require('./alunos')
alunos2 = require('./estudantes')
let curso = {  // Micro Passo 4
    nomeCurso: "Engenharia de Software",
    notaAprovacao: 7,
    faltasMaxima: 10,
    listaEstudantes: [],
    statusAprovação: function(x) { // Micro Desafio 5
        if (x.media() >= this.notaAprovacao && x.faltas < this.faltasMaxima) {
            return true
        }
        else if(x.faltas == this.faltasMaxima && x.media() >= (.10*this.notaAprovacao)+this.notaAprovacao) {
            return true
        }

        else {
            return false
        }
    },
    listaStatus: function() { //Micro Desafio 6
        arrayBoolean = []
        i = 0
        do {
            arrayBoolean.push(this.statusAprovação(this.listaEstudantes[i]))
            i++
            
        }
        while (i <this.listaEstudantes.length)
        console.log(arrayBoolean)
    }
}

// curso.listaEstudantes.push(new alunos("José", 1, [8,10,7,7]))
// curso.listaEstudantes.push(new alunos("Carlos", 1, [9,7,7,8]))
// curso.listaEstudantes.push(new alunos("Fernanda", 10, [7,9,6,8]))
// curso.listaEstudantes.push(new alunos("Maria", 21, [10,10,10,10]))

// console.log(curso)
// console.log(curso.listaEstudantes[0])
// console.log(curso.statusAprovação(curso.listaEstudantes[0]))
// console.log(curso.listaEstudantes[1].faltas)
// console.log(curso.listaStatus())



// MICRO DESAFIO 7 

importar = function (x,y) {
    let i = 0
    do {
        x.push(y[i])
        i++
    }
    while (i<y.length)
    }
    importar(curso.listaEstudantes,alunos2)

    // console.log(alunos2)
    console.log(curso)
    console.log(curso.listaEstudantes[0])
    console.log(curso.statusAprovação(curso.listaEstudantes[0]))
    console.log(curso.listaEstudantes[1].faltas)
    console.log(curso.listaStatus())

















