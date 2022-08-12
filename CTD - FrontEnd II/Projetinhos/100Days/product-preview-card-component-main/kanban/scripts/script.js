let container = document.querySelector("#container");
let menu = document.querySelector(".menu");
let taskContainer = document.querySelector(".task-container");

let allBoards = document.querySelector(".boards");
let boardName = document.querySelector(".board-name");

// buttons
let addTaskBttn = document.querySelector("#add-task");
let clearTaskBtn = document.getElementById("clear-task");
let confirmTaskBtn = document.getElementById("confirm-task");
let addBoardBttn = document.querySelector("#add-board");
let darkThemeBttn = document.querySelector("#darktheme");


let toDoBoard = document.getElementById("to-do-elements"); 
let doingBoard = document.getElementById("doing-elements");
let doneBoard = document.getElementById("done-elements");

let titleTask = document.getElementById("title-task");
let taskDescription = document.getElementById("task-description");
let choosenColumn = document.getElementById("choose-column")
let countElement = 0;

const boardsData = [{ 
    name: "",
    taskToDo: [],
    taskDoing: [],
    taskDone: [],
}]


function start () {
    addBoard()
    clearTaskBtn.addEventListener("click", clearTask)
    confirmTaskBtn.addEventListener("click", addtask )
    addBoardBttn.addEventListener("click", addBoard)

    // allBoards.addEventListener("click", getBoardTitle)
    let newBoardClasseTeste = document.querySelectorAll(".new-board");
    
}

function addBoard() {
    let countBoard = document.getElementById("count-boards");
    let numberCounter = Number(countBoard.innerText)
    countBoard.innerText = numberCounter+1;
    
    createElementTo(allBoards, `NOVO QUADRO ${countBoard.innerText}`);
    let currentBoard = allBoards.children[numberCounter];
    currentBoard.classList.add(`new-board`);
    currentBoard.value = `${countBoard.innerText-1}`;
    
    currentBoard.addEventListener("mouseover", function(event) {event.currentTarget.style.cursor = "pointer";})
    currentBoard.addEventListener("click", selectBoard)
    currentBoard.addEventListener("dblclick", rename)


}

function callFormTask(){
    let addTaskBoard = document.getElementsByClassName("new-task")[0];
    addTaskBoard.classList.toggle("new-taskOn")
    if (addTaskBttn.textContent == "Fechar Tarefa") {
        addTaskBttn.textContent = "Adicionar Tarefa"
    }
    else {
        addTaskBttn.textContent = "Fechar Tarefa"
    }
}
function clearTask(){
    taskDescription.value = "";
    titleTask.value = "";
}
function createElementTo(pai, texto, taskDescription = "") {
    countElement++
    if( texto == "") {
        alert("Por favor, adicione ao menos um título em sua tarefa")
        countElement--
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
    console.log(countElement)

}

function addtask() {
    let teste = choosenColumn.value
    let variavel = eval(teste)

    createElementTo(variavel, titleTask.value, taskDescription.value)
    callFormTask()
    clearTask()

}
function rename (event) {
    let newName = prompt("Digite o novo nome:")
    event.currentTarget.innerText = newName;
    selectBoard()
}
function selectBoard (event) {
    boardName.innerText = event.currentTarget.innerText
    }




start ()