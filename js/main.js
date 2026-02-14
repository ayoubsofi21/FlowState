import { displayTasks, addTask } from "./todo.js";
import { createHeader, createBody, createFooter, profil } from "./ui.js";

let container;

export const initNavigation = (rootContainer) => {
  container = rootContainer;
  goHome();
};

const addEvents = () => {
  document.getElementById("home")?.addEventListener("click", goHome);
  document.getElementById("profil")?.addEventListener("click", goProfile);
};

const goHome = () => {
  container.innerHTML = `
    ${createHeader()}
    ${createBody()}
    ${createFooter()}

  `;
  //   displayTasks("taskList");
  addTask();
  addEvents();
};

const goProfile = () => {
  container.innerHTML = `
    ${profil()}
    ${createFooter()}
  `;
  displayTasks("taskList");
  addEvents();
};
