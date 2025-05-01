// import { domController } from "./domController";

import { domController } from "./domController";

// import ToDoCard from "./toDo";
export default class ProjectPage {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectToDoCards = [];
  }

  getProjectName() {
    return this.projectName;
  }

  getProjectToDoCards() {
    return this.projectToDoCards;
  }

  drawNewProjectPage() {
    contentPage.innerHTML = "";
    const contentPage = domController.clearMainContentContainer();
    const projectPageDiv = document.createElement("div");
    const projectPageTitle = document.createElement("h2");
    projectPageTitle.innerText = this.projectName;
    projectPageDiv.appendChild(projectPageTitle);
    contentPage.appendChild(projectPageDiv);
    domController.drawProjectToDoCards(this.projectToDoCards);
  }

  addProjectPageBtn() {
    const projectBtn = domController.createBtn(this.projectName);
    projectBtn.setAttribute("id", this.projectName);
    // projectBtn.innerText = this.projectName;
    projectBtn.addEventListener("click", () => {
      domController.createNewProject(this);
    });

    const pageTabs = document.querySelector(".project-pages");
    pageTabs.innerText = this.projectName;
    pageTabs.appendChild(projectBtn);
  }

  addCardToProject(ToDoCardBeingAdded) {
    this.projectToDoCards.push(ToDoCardBeingAdded);
  }
}
