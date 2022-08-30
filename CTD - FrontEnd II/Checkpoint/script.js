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


    function createCards(url, title, description, index ="") {
        if(index == "") {
            index = savedData.length-1
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
            if (index %2 !== 0 ) {
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
        secondaryArea.innerHTML = ''
        primaryArea.innerHTML = ''
        if (window.innerWidth < 481) {
            savedData.forEach(form => {
                createCards(form.url, form.name, form.description)
            });
            secondaryArea.style.display = "none"
            primaryArea.style.display = "none"

        } else {
            savedData.forEach( (form, index) => {
                createCards(form.url, form.name, form.description, index)
            });
            secondaryArea.style.display = "flex"
            primaryArea.style.display = "flex"
        }
    }
}
