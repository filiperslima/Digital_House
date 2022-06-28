let listaAlunos = [ {
    nome: "Maria Aparecida",
    faltas: 2,
    notas: [ 8, 8, 8,6],
    media: function () { 
        media = this.notas.reduce((nota, total) => nota+total/this.notas.length, 0) // Micro passo 2
        return media
    },
    contarFaltas: function() {
        return this.faltas = this.faltas + 1
    }
},
{
    nome: "Maria das graças",
    faltas: 5,
    notas: [ 9, 9, 0,9],
    media: function () { 
        media = this.notas.reduce((nota, total) => nota+total/this.notas.length, 0) // Micro passo 2
        return media
    },
    contarFaltas: function() {
        return this.faltas = this.faltas + 1
    }
},
{
    nome: "Maria da saúde",
    faltas: 10,
    notas: [ 8, 8, 7,10],
    media: function () { 
        media = this.notas.reduce((nota, total) => nota+total/this.notas.length, 0) // Micro passo 2
        return media
    },
    contarFaltas: function() {
        return this.faltas = this.faltas + 1
    }
},
{
    nome: "Maria das dores",
    faltas: 2,
    notas: [ 8, 2, 5,6],
    media: function () { 
        media = this.notas.reduce((nota, total) => nota+total/this.notas.length, 0) // Micro passo 2
        return media
    },
    contarFaltas: function() {
        return this.faltas = this.faltas + 1
    }
}

]
module.exports = listaAlunos;