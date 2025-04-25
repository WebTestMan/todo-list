export default class ToDoCard {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    // Getters
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getDueDate() {
        return this.dueDate;
    }
    getPriority() {
        return this.priority;
    }

    getCompleted() {
        return this.completed;
    }

    // Setters
    setCompleted() {
        this.completed = true;
    }

    setDueDate(newDate) {
        this.dueDate = newDate;
    }
}