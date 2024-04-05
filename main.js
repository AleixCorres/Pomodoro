const idTask = Symbol();

class Task{

    constructor(title, description, category, data, color){
        this[idTask] = Symbol();
        this.title = title;
        this.description = description;
        // this.category = category;
        // this.data = data;
        // this.color = color;
        }
        
        getId() {
            // Devuelve el valor del símbolo único asignado a esta instancia
            return this[idSymbol];
    }
}

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

function completarDatos() {
    
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    // let date = document.getElementById('date').value;
    // let color = document.getElementById('color').value;
    
    let tasks = new Task(title, description);
        
    
}