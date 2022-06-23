alunos = require('./alunos')
let curso = {
    nomeCurso: "Engenharia de Software",
    notaAprovacao: 7,
    faltasMaxima: 13,
    listaEstudantes: []
}

curso.listaEstudantes.push(new alunos("José", 1, [8,10,7,7]))
curso.listaEstudantes.push(new alunos("Carlos", 1, [4,7,7,8]))
curso.listaEstudantes.push(new alunos("Fernanda", 5, [7,9,9,8]))
curso.listaEstudantes.push(new alunos("Maria", 2, [10,10,10,10]))

console.log(curso.listaEstudantes[0].contarFaltas())

console.log(curso.listaEstudantes[0].faltas)