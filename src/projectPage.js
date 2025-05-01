import { domController } from "./domController";
// import ToDoCard from "./toDo";
export default class ProjectPage {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectToDoCards = [];
  }

  drawNewProjectPage() {
    // const contentPage = document.querySelector(".grid-content");
    // contentPage.innerHTML = "";
    const contentPage = domController.clearMainContentContainer();
    const projectPageDiv = document.createElement("div");
    const projectPageTitle = document.createElement("h2");
    projectPageTitle.innerText = this.projectName;
    projectPageDiv.appendChild(projectPageTitle);
    contentPage.appendChild(projectPageDiv);
  }

  addProjectPageBtn() {
    const projectBtn = document.createElement("button");
    projectBtn.setAttribute("id", this.projectName);
    projectBtn.innerText = this.projectName;
    projectBtn.addEventListener("click", () => {
      this.drawNewProjectPage();
    });

    const pageTabs = document.querySelector(".project-pages");
    pageTabs.innerText = this.projectName;
    pageTabs.appendChild(projectBtn);
  }

  addCardToProject(ToDoCardBeingAdded) {
    this.projectToDoCards.push(ToDoCardBeingAdded);
  }
}
