class Task{

    constructor(title, description, category, data, color){
        this.title = title;
        this.description = description;
        this.category = category;
        this.data = data;
        this.color = color;
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