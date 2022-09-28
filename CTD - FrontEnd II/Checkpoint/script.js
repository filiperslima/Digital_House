
window.onload = function () {
    let scrollPositionX = 0;
    let scrollPositionY = 0;
    const imageUrl = document.querySelector('#url');
    const title = document.getElementById('title');
    const textArea = document.querySelector('textarea');
    const button = document.querySelector('button')

    let responsiveArea = document.querySelector(".small-card-area")
    const primaryArea = document.querySelector("#primary-area")
    const secondaryArea = document.querySelector("#secondary-area")
    let toPrimary = true;

    const right = document.querySelectorAll(".right")
    const left = document.querySelectorAll(".left")
    right[0].addEventListener("mousedown", scrollingX)
    left[0].addEventListener("mousedown", scrollingY)
    right[1].addEventListener("mousedown", scrollingX)
    left[1].addEventListener("mousedown", scrollingY)


    button.addEventListener('click', sendInformation)
    const savedData = []


    function createCards(url, title, description, index = "") {
        if (index == "") {
            index = savedData.length - 1
        }
        const divCard = document.createElement("div");
        divCard.setAttribute('class', 'card')
        divCard.innerHTML =
            `
                <div class="face face1">
                <div class="content">
                    <img src=${url}>
                    <h2 selected > ${title} </h2>
                    </div>
                </div>
                <div class="face face2">
                <div class="content">
                   <h4> ${description}</h4>
                </div>
                </div>
`
        if (window.innerWidth >= 481) {
            if (index % 2 !== 0) {
                primaryArea.appendChild(divCard)
            }
            else {
                secondaryArea.appendChild(divCard);
            }

        } else {
            responsiveArea.appendChild(divCard)
        }
    }
    function scrollingX(event) {
        if (scrollPositionX / 2 <= event.currentTarget.parentElement.scrollHeight) {
            scrollPositionX += 100;
            scrollPositionY -= 100;
            console.log(event.currentTarget.parentElement.scrollHeight);
            console.log(scrollPositionY);
            event.currentTarget.parentElement.scroll(scrollPositionX, scrollPositionY)
        }
    }
    function scrollingY(event) {
        if (scrollPositionY / 2 <= !event.currentTarget.parentElement.scrollHeight) {
            scrollPositionY += 100;
            scrollPositionX -= 100;
            console.log(event.currentTarget.parentElement.scrollHeight);
            console.log(scrollPositionY);
            event.currentTarget.parentElement.scroll(scrollPositionX, scrollPositionY)
        }
    }

    function sendInformation(event) {
        if (title.value != "" && textArea.value != "" && imageUrl.value != "") {
            let toSave = {
                name: title.value,
                description: textArea.value,
                url: imageUrl.value,
            }
            savedData.push(toSave)
            createCards(toSave.url, toSave.name, toSave.description)
            document.forms[0].reset()
        }
        event.preventDefault()

    }
    window.onresize = () => {
        responsiveArea.innerHTML = ''
        secondaryArea.innerHTML =
            `
        <svg class="right" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
      <svg class="left" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
      </svg>
        `
        primaryArea.innerHTML = 
        `
        <svg class="right secondary" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
      <svg class="left secondary" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
      </svg>
        `
        if (window.innerWidth < 481) {
            savedData.forEach(form => {
                createCards(form.url, form.name, form.description)
            });
            secondaryArea.style.display = "none"
            primaryArea.style.display = "none"

        } else {
            savedData.forEach((form, index) => {
                createCards(form.url, form.name, form.description, index)
            });
            secondaryArea.style.display = "flex"
            primaryArea.style.display = "flex"
        }
    }
}
