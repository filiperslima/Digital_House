let divNot = document.getElementById('not');
console.log(divNot)

divNot.addEventListener('mouseenter', run)

function run(){
    divNot.style.width = '5vw'
    divNot.style.height = '5vh'
    divNot.style.position = 'absolute'
    let aleatoryTop = Math.random() * (80-1)+0;
    let aleatoryLeft = Math.random() * (80-1)+0;
    console.log(aleatoryLeft)
    divNot.style.top = `${aleatoryTop}vh`
    divNot.style.left = `${aleatoryLeft}vw`
}