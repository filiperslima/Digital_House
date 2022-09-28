const main = document.querySelector("main")
let button = document.querySelector('button')
button.onmouseup = (event) => { 
    main.innerHTML = `
    <div class="btnContainer">
    <button id="random">Pedir random</button>
</div>
    `
    event.preventDefault();

}
button.onmousedown = () => {
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        renderizarDadosUsuario(data)
    });
}
// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos a resposta
            renderizarDadosUsuario(data)
        })

function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    let divCard = document.createElement('div')
    divCard.classList.add('card')
    divCard.innerHTML = `
        <img src=${dados.results[0].picture.medium}>
        <h2> ${dados.results[0].name.first} ${dados.results[0].name.last}</h2>
        <h3>${dados.results[0].email}</h3>

    `
    main.append(divCard)

}
/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.







