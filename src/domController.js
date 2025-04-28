// import ToDoCard from "./toDo";

const domController = (function () {
  const createNewToDoCard = (toDoCard) => {
    const newToDoCard = document.createElement("div");
    newToDoCard.classList.add("todo-card");

    const contentArray = [];

    const toDoTitle = document.createElement("h3");
    toDoTitle.innerText = toDoCard.getTitle();
    contentArray.push(toDoTitle);

    const toDoDescription = document.createElement("p");
    toDoDescription.innerText = toDoCard.getDescription();
    contentArray.push(toDoDescription);

    const toDoDueDate = document.createElement("p");
    toDoDueDate.innerText = `Due: ${toDoCard.getDueDate()}`;
    contentArray.push(toDoDueDate);

    const toDoPriority = document.createElement("h4");
    const priority = toDoCard.getPriority();
    toDoPriority.innerText = `Priority: ${priority}`;
    toDoPriority.classList.add(priority);
    contentArray.push(toDoPriority);

    const completedDiv = document.createElement("div");
    const completedLabel = document.createElement("label");
    const toDoCompleted = document.createElement("input");
    const completedText = document.createElement("p");

    completedLabel.setAttribute("for", "completed");
    completedLabel.innerText = "Completed?";

    completedText.innerText = toDoCard.getCompleted();

    toDoCompleted.setAttribute("type", "checkbox");
    toDoCompleted.setAttribute("id", "completed");

    toDoCompleted.addEventListener("click", () => {
      toDoCard.setCompleted();
      completedText.innerText = toDoCard.getCompleted();
    });
    completedDiv.appendChild(completedLabel);
    completedDiv.appendChild(completedText);
    completedDiv.appendChild(toDoCompleted);

    contentArray.push(completedDiv);

    contentArray.forEach((element) => {
      newToDoCard.appendChild(element);
    });

    const toDoGridDiv = document.querySelector(".grid-content");
    toDoGridDiv.appendChild(newToDoCard);
  };

  const createNewProject = () => {};

  return { createNewToDoCard, createNewProject };
})();

export { domController };
