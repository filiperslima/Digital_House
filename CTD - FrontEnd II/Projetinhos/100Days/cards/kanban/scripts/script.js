let allBoards = document.querySelector(".boards");
let boardName = document.querySelector(".board-name");

// buttons
let addTaskBttn = document.querySelector(".add-btn");
let clearTaskBtn = document.getElementById("clear-task");
let confirmTaskBtn = document.getElementById("confirm-task");
let addBoardBttn = document.querySelector("#add-board");
let darkThemeBttn = document.querySelector("#darktheme");
let taskText = document.querySelector(".add-text")
let addIcon = document.querySelectorAll('svg')[1]
let closeIcon = document.querySelectorAll('svg')[2]
let arrowRight = document.querySelector(".right");
let arrowLeft = document.querySelector(".left");




let addTaskBoard = document.querySelector(".new-task");
let toDoBoard = document.getElementById("taskToDo");
let doingBoard = document.getElementById("taskDoing");
let doneBoard = document.getElementById("taskDone");

let titleTask = document.getElementById("title-task");
let taskDescription = document.getElementById("task-description");
let choosenColumn = document.getElementById("choose-column")
let countElement = 0;

const boardsData = []
window.onload = () => {
    clearTaskBtn.addEventListener("click", clearTask)
    confirmTaskBtn.addEventListener("click", addtask)
    addBoardBttn.addEventListener("click", addBoard)
    addTaskBttn.addEventListener('click', callFormTask)
    darkThemeBttn.addEventListener('click', darkMode)
    arrowLeft.addEventListener("mouseup", callMenu)
    arrowRight.addEventListener("mouseup", callMenu)
    addBoard()

    // console.log(boardsData)
}


function addBoard() {
    let countBoard = document.getElementById("count-boards");
    let numberCounter = Number(countBoard.innerText)
    if (numberCounter < 8) {
        countBoard.innerText = numberCounter + 1;

        createElementTo(allBoards, `NOVO QUADRO ${numberCounter + 1}`);
        let currentBoard = allBoards.children[numberCounter];
        currentBoard.setAttribute('id', `${numberCounter}`)
        currentBoard.classList.add(`new-board`);
        currentBoard.value = `${countBoard.innerText - 1}`;

        currentBoard.addEventListener("mouseover", function (event) { event.currentTarget.style.cursor = "pointer"; })
        currentBoard.addEventListener("mousedown", selectBoard)
        currentBoard.children[0].addEventListener("dblclick", rename)

        const newBoard = {
            name: `NOVO QUADRO ${countBoard.innerText}`,
            id: numberCounter,
            taskToDo: [],
            taskDoing: [],
            taskDone: [],
            addTask: function (where, title, description) {
                switch (where) {
                    case 'toDoBoard':
                        this.taskToDo.push({ title: title, description: description })
                        break;
                    case 'doingBoard':
                        this.taskDoing.push({ title: title, description: description })
                        break;
                    case 'doneBoard':
                        this.taskDone.push({ title: title, description: description })
                        break;
                    default:
                        console.log("ocorre um erro");
                        break;
                }
            },
            hasThisName: function (name) {
                return this.name == name
            },
            changeName: function (oldName, newName) {
                if (this.hasThisName(oldName)) {
                    this.name = newName;
                }
            },
            removeTask: function (where) {

            }
        }
        boardName.innerText = newBoard.name

        boardsData.push(newBoard)
    }
}
function callFormTask() {
    // console.log(taskText);
    addTaskBoard.classList.toggle("new-taskOn")
    addIcon.classList.toggle("off")
    closeIcon.classList.toggle("off")

    if (taskText.innerText == "Fechar") {
        taskText.innerText = "Adicionar"
    }
    else {
        taskText.innerText = "Fechar"
    }
}
function clearTask(event) {
    taskDescription.value = "";
    titleTask.value = "";
    // event.preventDefault()
}

function addtask(event) {
    let teste = choosenColumn.value
    let variavel = eval(teste)
    boardsData.forEach(element => {
        if (element.name == boardName.innerText) {
            element.addTask(teste, titleTask.value, taskDescription.value)
        }
    });
    createElementTo(variavel, titleTask.value, taskDescription.value)
    callFormTask()
    clearTask()
    event.preventDefault()

}
function rename(event) {
    let target = event.currentTarget
    const oldName = event.currentTarget.innerText
    event.currentTarget.innerText = ""
    target.contentEditable = true;
    event.currentTarget.addEventListener('focusout', () => {
        target.contentEditable = false;
        const novoNome = target.innerText
        let repeated = false;
        boardsData.forEach(element => {
            if (element.hasThisName(novoNome)) {
                repeated = true
            }
        });
        if (repeated === false) {
            boardsData.forEach(element => {
                if (element.name === oldName) {
                    element.name = novoNome;
                    boardName.innerText = novoNome;
                    target.innerText = element.name;

                }
            });
        }
        else {
            target.innerText = oldName
        }
    })
    console.log(event.currentTarget.innerText)
    console.log(boardsData);
    event.currentTarget.innerText = boardName.innerText
    event.preventDefault()

}

function selectBoard(event) {
    boardName.innerText = event.currentTarget.innerText
    boardsData.forEach(element => {
        return element.name == event.currentTarget.innerText
    });
    refreshBoard(boardName.innerText)

}

function refreshBoard(change) {
    toDoBoard.innerHTML = "";
    doingBoard.innerHTML = "";
    doneBoard.innerHTML = "";
    boardsData.forEach(element => {
        if (change == element.name) {
            element.taskToDo.forEach((task) => {
                createElementTo(toDoBoard, task.title, task.description)
            })
            element.taskDoing.forEach((task) => {
                createElementTo(doingBoard, task.title, task.description)
            })
            element.taskDone.forEach((task) => {
                createElementTo(doneBoard, task.title, task.description)
            })


        }
    });

}

function createElementTo(pai, texto, taskDescription = "") {
    countElement++
    if (texto == "") {
        return
    }
    let newElementTitle = document.createElement('h3');
    let newElementDescription = document.createElement("h5");
    let textDescription = document.createTextNode(taskDescription)
    let textTitle = document.createTextNode(texto);
    let divElements = document.createElement("div")


    newElementTitle.appendChild(textTitle)
    newElementDescription.appendChild(textDescription)
    divElements.appendChild(newElementTitle)
    divElements.appendChild(newElementDescription)

    pai.appendChild(divElements)
}
function darkMode() {
    let body = document.querySelector('body')
    let header = document.querySelector('.header')
    let board = document.querySelector('#task-container')
    let h1 = document.querySelector("h1")
    let moon = document.querySelector(".moon")
    let sun = document.querySelector(".sun")

    h1.classList.toggle("dark-h1")
    body.classList.toggle("dark-body")
    header.classList.toggle("dark-body")
    board.classList.toggle("dark")
    taskToDo.classList.toggle('dark-tasks')
    boardName.classList.toggle('dark-h1')
    addTaskBttn.classList.toggle('dark-h1')
    moon.classList.toggle('off')
    sun.classList.toggle('off')
}

function callMenu() {
    let menu = document.querySelector(".menu")
    menu.classList.toggle("visible")


}

