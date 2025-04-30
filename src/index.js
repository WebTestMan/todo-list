import { domController } from "./domController";
import "./styles.css";
import ToDoCard from "./toDo.js";
import ProjectPage from "./projectPage.js";
import { imageCarousel } from "./imageCarousel.js";

console.log("Hello World!");

const createNewToDoCardForm = document.getElementById("new-todo-form");
createNewToDoCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.querySelector("#priority-select").value;

  const newToDoCard = new ToDoCard(title, description, dueDate, priority);
  domController.createNewToDoCard(newToDoCard);

  //   createNewToDoCardForm.reset();
});

const createNewProjectBtn = document.getElementById("new-project-btn");
createNewProjectBtn.addEventListener("click", () => {
  const projectPage = new ProjectPage("test");
  projectPage.addProjectPageBtn();
});

const dropDownDiv = document.getElementById("show-drop-down");
dropDownDiv.addEventListener("click", () => {
  document
    .getElementById("drop-down-buttons")
    .classList.toggle("drop-down-visible");
});

const imageCarouselButton = document.getElementById("image-carousel");
imageCarouselButton.addEventListener("click", () => {
  imageCarousel.drawImageCarouselPage();
});

const listerProjectBtn = document.getElementById("lister-projects");
listerProjectBtn.addEventListener("click", () => {});
