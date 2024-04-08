// Task.js
class Task {
    static counterId = 0;
    
    constructor(title, description, category, date, color) {
        this.id = ++Task.counterId;
        this.title = title;
        this.description = description;
        this.category = category;
        this.date = date;
        this.color = color;
    }
}

export default Task;
