export class Task{
    constructor(title, date='', completed = false){
        this.title = title;
        this.date = date;
        this.completed = completed;
    }
    // Função que alterar estado da tarefa
    toggleCompleted(){
        this.completed = !this.completed;
    }
}