
window.onload = () => {
    let container = document.querySelector(".container");
    let text = document.querySelector("input")
    let sendMessage = document.querySelector(".sendMessage");
    sendMessage.addEventListener("click", createMessageElement)


    function createMessageElement(textMessage) {
        textMessage = text.value
        let message = document.createElement('div')
        message.innerHTML = `
                <p class="answerUser">${textMessage}</p>
                <img src="https://www.petlove.com.br/dicas/wp-content/uploads/2020/11/gato-preto-2.jpg" alt="">
    `
        message.classList.add("firstUser")
        container.appendChild(message)
        container.scrollBy(0, window.innerHeight*2)
    }

}