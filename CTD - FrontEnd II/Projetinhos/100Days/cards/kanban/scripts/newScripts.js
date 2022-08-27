

// window.onload = () => {
const board = function Board(name, taskToDo, taskDoing, taskDone, addTask, removeTask) {
    this.name = name;
    this.taskToDo = [taskToDo];
    this.taskDoing= [taskDoing];
    this.taskDone= [taskDone];
    this.addTask = function (where, valueTitle, valueDescription) {
        switch (where) {
            case 'task-to-do':
                this.taskToDo.push({title:valueTitle, description:valueDescription})
                break;
        
            default:
                break;
        }
    },
    this.removeTask = function (where, value) {
        where.push(value)
    }

}
const boardData = []
boardData.push(new board('carla','aosi'))
console.log(boardData[0].addTask('task-to-do', 'valor', 'descrição'))
  
// boardData.addTask(this.taskToDo, "titulo qualquer", "Valor qualquer")



// }