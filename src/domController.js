const domController = (function (toDoCard) {
    const createNewToDoCard = (toDoCard) => {
        const newToDoCard = document.createElement('div');
        newToDoCard.classList.add('todo-card');
        
        const toDoTitle = document.createElement('h3');
        toDoTitle.innerText = toDoCard.getTitle();
        newToDoCard.appendChild(toDoTitle);

        const toDoGridDiv = document.querySelector('.grid-content');
        toDoGridDiv.appendChild(newToDoCard);
    }

    return { createNewToDoCard }
})();

export { domController };