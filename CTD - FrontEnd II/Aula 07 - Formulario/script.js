let body = document.querySelector('body');
let formBox = document.querySelector('#form')
let input ;
let form;
function start() {
    createForm()
}


function createForm() {
    form = document.createElement('form')
    form.classList.add('form-flex')
    formBox.appendChild(form)
    input = (function() {
        let tag = "";
        for (let index = 0; index <=  3; index++) {
            tag = document.createElement('input')
            tag.classList.add(`input${index}`)
            tag.setAttribute('disabled', 'disabled')
            form.appendChild(tag)
        }
        return form.children
    })();
    form.addEventListener('mouseup', enableAll)
}

function disableUnselecteds(event) {
    console.log(event)
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
       if (element != event.currentTarget) { element.setAttribute('disabled', 'disabled')}
    }
    console.log(event)
}

function enableAll(event) {
    for (let index = 0; index < event.currentTarget.children.length; index++) {
        const element = event.currentTarget.children[index];
        element.removeAttribute('disabled')
        element.addEventListener('click', disableUnselecteds)

    }
}

start()