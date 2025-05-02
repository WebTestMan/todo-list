import { domController } from "./domController";
import "./styles.css";
import ToDoCard from "./toDoCard.js";
import ProjectPage from "./projectController.js";
import { imageCarousel } from "./imageCarousel.js";

console.log("Hello World!");

const projectArray = [];
const defaultProject = new ProjectPage("Default Project");
projectArray.push(defaultProject);
let activeProjectPage = projectArray[0];

const createNewToDoCardForm = document.getElementById("new-todo-form");

createNewToDoCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.querySelector("#priority-select").value;

  const newToDoCard = new ToDoCard(title, description, dueDate, priority);
  activeProjectPage.addCardToProject(newToDoCard);

  domController.createNewToDoCard(newToDoCard);
  //   createNewToDoCardForm.reset();
  console.log(projectArray);
  console.log(defaultProject);
});

const createNewProjectBtn = document.getElementById("new-project-btn");
createNewProjectBtn.addEventListener("click", () => {
  const projectPage = new ProjectPage("New Project");
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

// const setActiveProject = (projectToBeSetToActive) => {
//   return projectArray.filter((project) => {
//     if (project.getProjectName() === projectToBeSetToActive) {
//       return project;
//     }
//   });
// };
