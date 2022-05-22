function soma(x,y) {
    return  x + y
}

function subtração(x,y){
    return x - y

}

function multiplicação (x,y) {
    return x*y

}
function divisão (x,y) {
    return x/y

}
console.log ("-------------- Teste de Operações / Calculador --------------")
console.log(soma(10,20))
console.log(subtração(63,8))
console.log(multiplicação(7,2))
console.log(divisão(82,0))

function quadradoDoNumero (x) {
    return multiplicação(x,x)
}
console.log(quadradoDoNumero(10))

function mediaDeTresNumeros(x, y, z){
    function soma (x,y,z) {
        return x+y+z
    }
    return divisão(soma(x,y,z),3)
}
console.log(mediaDeTresNumeros(10,20,80))

function calcularPorcentagem (x, y) {
    

}
console.log()