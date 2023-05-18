const ul = document.querySelector("ul");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const body = document.querySelector("body")


const aboutMe = document.querySelector("#about-me");
const home = document.querySelector("#home");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
// let list = [ aboutMe, projects, contact];
let atual = [];
let list = ["#home", "#about-me", "#projects", "#contact"]

let position = 0

window.onload = () => {
    writeInList();
    setTimeout(() => {
        writeWelcome("> Olá, seja bem vindo!", h1, 40);
        setInterval(() => {
            h1.innerText += "|"
            setTimeout(() => {
                h1.innerText = "> Olá, seja bem vindo!"
            }, 300);
        }, 600);
        writeWelcome("> Lorem a as Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus enim debitis vel maxime voluptatum sunt quam minima a.", h2, 5)

    }, 300);
    window.onscroll = ('scroll', scrollPage)

}
function createList(classe) {
    li = document.createElement("li");
    li.classList.add(classe);
    ul.appendChild(li);
    return li;
}

function writeWelcome(text, parent, ms) {
    let textList = text.split("");
    let word = "";
    textList.forEach((element, i) => {
        setTimeout(() => {
            word += element;
            parent.innerText = word;
        }, i * ms);

    })


}


function writeInList() {
    setInterval(() => {
        if (ul.children.length == 10) {
            ul.innerHTML = '';
            count = 0;
        }
        else {
            do {
                let count = 0;
                let word = ["01100010", "01100101", "01101101", "00100000", "01110110", "01101001", "01101110", "01100100", "01101111", "00100001"];

                word.forEach((element, a) => {
                    let currentList = createList(count);
                    let currentElement = element.split("");
                    let word = "";
                    setTimeout(() => {
                        currentElement.forEach((current, i) => {
                            setTimeout(() => {
                                word += current;
                                currentList.innerText = word;

                            }, i * 50);
                        });
                    }, a * 200);
                    count++
                });

            } while (ul.children.length <= 9);

        }
    }, 2200);


}

function scrollPage(event) {
    let a = this.oldScroll > this.scrollY;
    this.oldScroll = this.scrollY;
    return a;
}


// 01100010 01100101 01101101 00100000 01110110 01101001 01101110 01100100 01101111 00100001