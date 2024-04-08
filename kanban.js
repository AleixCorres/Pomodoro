// main.js
import Task from './Task.js';
let tasks = [];

// Obtener todas las tarjetas
const cards = document.querySelectorAll('.card');

// Asignar un controlador de eventos de arrastre a cada tarjeta
cards.forEach(card => {
    card.addEventListener('dragstart', dragStart);
});

// Obtener todas las columnas
const columns = document.querySelectorAll('.kanban > div');

// Asignar controladores de eventos de soltar y arrastrar sobre a cada columna
columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('drop', drop);
});

let draggedCard;

document.addEventListener('DOMContentLoaded', function() {
    const saveChangesBtn = document.querySelector('.completarBtn');
    saveChangesBtn.addEventListener('click', completarDatos);
    deleteCard();
});

function dragStart(event) {
    draggedCard = event.target;
}

function dragOver(event) {
    event.preventDefault(); 
}

function drop(event) {
    event.preventDefault(); 
    const targetColumn = event.target.closest('.kanban > div'); 
        
    const sourceColumn = draggedCard.parentElement.closest('.kanban > div');
    if (sourceColumn.classList.contains('done') && !targetColumn.classList.contains('done')) {
        return; 
    }
    
    targetColumn.appendChild(draggedCard); 
}

function deleteCard() {
    let deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() { 
            let tarjeta = button.parentNode;
            tarjeta.remove();
        });
    });
}

function completarDatos() {
    
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
    let date = new Date();
    let color = document.getElementById('color').value;
    
        let task = new Task(title, description, category, date, color);
        tasks.push(task);
    
    
        // 1er div creado
        let newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.setAttribute('draggable', 'true');
        newCard.dataset.id = task.id;
        newCard.style.backgroundColor = task.color;

        //Descripcion, categoria i nombre
        let categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.textContent = task.category;
        newCard.appendChild(categoryElement);

        let titleElement = document.createElement('div');
        titleElement.classList.add('card-title');
        let titleHeading = document.createElement('h2');
        titleHeading.textContent = task.title;
        titleElement.appendChild(titleHeading);

        let descriptionElement = document.createElement('div');
        descriptionElement.classList.add('card-description');
        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = task.description;
        descriptionElement.appendChild(descriptionParagraph);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', deleteCard);
        newCard.appendChild(deleteButton);

        // Añadir los hijos al primer div
        newCard.appendChild(titleElement);
        newCard.appendChild(descriptionElement);

        newCard.addEventListener('dragstart', dragStart);
        let toDo = document.querySelector('.toDo');
        toDo.appendChild(newCard);
}


