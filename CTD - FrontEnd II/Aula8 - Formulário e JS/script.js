let nome = document.getElementById('nome');
let sobreNome = document.getElementById('sobrenome')
let enviar = document.getElementById('enviar');
let nameLabel = document.querySelector('.name');
let nickLabel = document.querySelector('.nick')
let divContainer = document.querySelector('#container');
let containerTarefa = document.querySelector('.container-tarefas')
let limpar = document.querySelector('#limpar')



window.onload = () =>{
    // alert('Página carregada')
    enviar.addEventListener('click', dontLoad)
    nameLabel.addEventListener('mouseenter', changeColor)
    nickLabel.addEventListener('mouseenter', changeColor)
    limpar.addEventListener('click', clearData)
    for (let index = 0; index <= 0; index++) {
        nome.value = 'Objeto JS'
        sobreNome.value ='Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor.'
        sendData()
        clearData()
}
}

function dontLoad() {
    sendData()
    enviar.preventDefault()
    // console.log(enviar)
}

function changeColor(event) {
    let mouseEvent = event.currentTarget
    const currentColor = mouseEvent.style.color
    console.log(currentColor)
    event.currentTarget.style.color = 'green'
    event.currentTarget.addEventListener('mouseout', () => {mouseEvent.style.color = currentColor})
}

function sendData() {
    let newDiv = document.createElement('div')
    if (nome.value) {
    newDiv.innerHTML =
     `
     <div class='card'>
     <h2> ${nome.value}</h2>
     <h3> ${sobreNome.value} </h3>
     </div>
     `
    }
    containerTarefa.appendChild(newDiv)
    clearData()

}
function clearData() {
    nome.value = ''
    sobreNome.value =''

}