// Micro passo 1
module.exports = function(nome, faltas, notas) {
    this.nome = nome,
    this.faltas = faltas,
    this.notas = notas,
    this.media = function () { 
        media = this.notas.reduce((nota, total) => nota+total/this.notas.length, 0) // Micro passo 2
        return media
    }
    this.contarFaltas = function() {
        return this.faltas = this.faltas + 1
    }
}
