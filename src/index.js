import { domController } from "./domController";
import "./styles.css";
import ToDoCard from "./toDo.js";

// tabs for new lists/projects

// to do card object

// title, description, dueDate, priority, notes, checklist

// todo logic

// dom manipulation
const createNewToDoCardForm = document.getElementById('new-todo-form');
createNewToDoCardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = 'test' //document.getElementById('priority').value;

    const newToDoCard = new ToDoCard(title, description, dueDate, priority);
    domController.createNewToDoCard(newToDoCard);

    createNewToDoCardForm.reset();
});
