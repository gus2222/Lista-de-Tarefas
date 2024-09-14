import {Task} from './task.js';
// obtendo elementos do HTML
const taskListElement = document.getElementById('tasks');
const titleInput = document.getElementById('title');
const dateInput = document.getElementById('date');
// Função para renderizar as tarefas (será utilizada no app.js)
export function renderTasks(tasks, onEdit, onDelete, onToggleCompleted){
    taskListElement.innerHTML = '';
    tasks.forEach((task,index)=>{
        const taskElement = document.createElement('li');
        taskElement.className = task.completed ? 'completed' : '';

        taskElement.innerHTML= `
            <span>${task.title} ${task.date ? `(${task.date})` : ''}</span>
            <div>
                <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}" class="toggle-completed">
                <button class="edit" data-index="${index}">Editar</button>
                <button class="delete" data-index="${index}">Deletar</button>
            </div>
        `
        taskElement.querySelector('.edit').addEventListener('click', () => onEdit(index));
        taskElement.querySelector('.delete').addEventListener('click', () => onDelete(index));
        taskElement.querySelector('.toggle-completed').addEventListener('change', () => onToggleCompleted(index));

        taskListElement.appendChild(taskElement);
    })
}
// função que obtem dados da tarefa no HTML e retorna uma instancia de tarefa para o app.js
export function getTaskData() {
    return new Task(
        titleInput.value,
        dateInput.value
    );
}
// função para limpar dados dos inputs no HTML
export function clearForm() {
    titleInput.value = '';
    dateInput.value = '';
}

export { titleInput, dateInput };