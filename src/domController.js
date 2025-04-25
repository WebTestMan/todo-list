// import ToDoCard from "./toDo";

const domController = (function () {
    const createNewToDoCard = (toDoCard) => {
        const newToDoCard = document.createElement('div');
        newToDoCard.classList.add('todo-card');

        const contentArray = [];

        const toDoTitle = document.createElement('h3');
        toDoTitle.innerText = toDoCard.getTitle();
        contentArray.push(toDoTitle);

        const toDoDescription = document.createElement('p');
        toDoDescription.innerText = toDoCard.getDescription();
        contentArray.push(toDoDescription);

        const toDoDueDate = document.createElement('p');
        toDoDueDate.innerText = toDoCard.getDueDate();
        contentArray.push(toDoDueDate);

        const toDoPriority = document.createElement('h4');
        const priority = toDoCard.getPriority();
        toDoPriority.innerText = priority;
        toDoPriority.classList.add(priority);
        contentArray.push(toDoPriority);

        contentArray.forEach(element => {
            newToDoCard.appendChild(element);
        })

        const toDoGridDiv = document.querySelector('.grid-content');
        toDoGridDiv.appendChild(newToDoCard);

        // const createNewToDoCardForm = document.getElementById('new-todo-form');
        // createNewToDoCardForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     const title = document.getElementById('title').value;
        //     const description = document.getElementById('description').value;
        //     const dueDate = document.getElementById('dueDate').value;
        //     const priority = document.getElementById('priority').options[e.selectedIndex].value;

        //     const newToDoCard = new ToDoCard(title, description, dueDate, priority);
        //     domController.createNewToDoCard(newToDoCard);

        //     createNewToDoCardForm.reset();
        // });
    }
    return { createNewToDoCard }
})();

export { domController };