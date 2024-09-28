import { renderTasks, getTaskData, clearForm, titleInput, dateInput } from './ui.js';

const tasks = [];
let currentTaskIndex = null;

// obtendo elementos do HTML
const newTaskForm = document.getElementById('new-task-form');
const showAllButton = document.getElementById('show-all');
const showCompletedButton = document.getElementById('show-completed');
const showPendingButton = document.getElementById('show-pending');
const submitButton = document.getElementById("submit");

// Função para adicionar tarefa
function addTask(e) {
    e.preventDefault();
    if (currentTaskIndex !== null) {
        tasks[currentTaskIndex] = getTaskData();
        currentTaskIndex = null;
    } else {
        tasks.push(getTaskData());
    }
    renderTasks(tasks, editTask, deleteTask, toggleCompleted);
    clearForm();
}
// Função para editar tarefa
function editTask(index) {
    const task = tasks[index];
    titleInput.value = task.title;
    dateInput.value = task.date;
    currentTaskIndex = index;
    submitButton.value = "Atualizar Tarefa" 
}
// Função para deletar tarefa
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks(tasks, editTask, deleteTask, toggleCompleted);
}
// Função para alterar estado da tarefa
function toggleCompleted(index) {
    tasks[index].toggleCompleted();
    renderTasks(tasks, editTask, deleteTask, toggleCompleted);
}
// Função para mostrar as tarefas de acordo com filtro
function showTasks(filter) {
    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });
    renderTasks(filteredTasks, editTask, deleteTask, toggleCompleted);
}

// Adicionando eventos aos botões
newTaskForm.addEventListener('submit', addTask);
showAllButton.addEventListener('click', () => showTasks('all'));
showCompletedButton.addEventListener('click', () => showTasks('completed'));
showPendingButton.addEventListener('click', () => showTasks('pending'));

// Inicializar com tarefas vazias
renderTasks(tasks, editTask, deleteTask, toggleCompleted);
