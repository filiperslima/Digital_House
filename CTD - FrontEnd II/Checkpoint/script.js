
window.onload = function () {
const cardArea = document.getElementById('card-area');

const imageUrl = document.querySelector('input');
const title = document.getElementById('title');
const textArea = document.querySelector('textarea');
const button = document.querySelector('button')
button.addEventListener('click', sendInformation)
const savedData = []

function clearFields() {
    textArea.value= "";
    title.value = "";
    imageUrl.value = "";
}


function createCards (url, title, description) {
    // const divCard = document.createElement('div');
    // const cardImage = document.createElement('img');
    // const cardTitle = document.createElement('h2');
    // const cardDescription = document.createElement('h4');

    // cardImage.setAttribute('src', url);
    // cardImage.setAttribute('class', 'cardImage');
    // cardImage.setAttribute('alt', "Imagem não encontrada")
    // divCard.setAttribute('class', 'div-card');
    // cardTitle.contentEditable = true;
    // cardTitle.innerText = `${title}`;
    // cardDescription.innerText = `${description}`;
    
    // divCard.appendChild(cardImage)
    // divCard.appendChild(cardTitle)
    // divCard.appendChild(cardDescription)

    // cardArea.appendChild(divCard)
    const divCard = document.createElement("div");
    divCard.setAttribute('class', 'card')

    divCard.innerHTML = 
                `
                <div class="face face1">
                <div class="content">
                    <img src=${url}>
                    <h2> ${title} </h2>
                    </div>
                </div>
                <div class="face face2">
                <div class="content">
                   <h4> ${description}</h4>
                </div>
                </div>
`
cardArea.appendChild(divCard)

}

function sendInformation (event) {
    if (title.value != "" && textArea.value != "" && imageUrl.value !=""){
    let toSave = {
        name: title.value,
        description: textArea.value,
        url: imageUrl.value
    }
    savedData.push(toSave)
    createCards(toSave.url, toSave.name, toSave.description)
    clearFields()
}
event.preventDefault()

}
}
