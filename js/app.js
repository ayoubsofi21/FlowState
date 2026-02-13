import { displayTasks, addTask } from "./todo.js";
import { createHeader, createBody, createFooter, profil } from "./ui.js";
// import { functionExport } from "./main.js";

const container = document.querySelector("#container");
container.innerHTML = `${createHeader()}
${createBody()}
${createFooter()}
;`;
displayTasks();
addTask();
// functionExport();
function addEvents() {
  const home = document.getElementById("home");
  const profi = document.getElementById("profil");

  home.addEventListener("click", goHome);
  profi.addEventListener("click", goProfile);
}
function goHome() {
  container.innerHTML = `
    ${createHeader()}
    ${createBody()}
    ${createFooter()}
  `;
  addEvents();
  displayTasks();
  addTask();
}

function goProfile() {
  container.innerHTML = `
    ${profil()}
    ${createFooter()}
    
  `;
  addEvents();
}
goHome();
// const profi = document.getElementById("profil");
// profi.addEventListener("click", () => {
//   container.innerHTML = `${createHeader()}${profil()} ${createFooter()}`;
// });
// // displayTasks();
// // addTask();
// const home = document.getElementById("home");
// home.addEventListener("click", () => {
//   container.innerHTML = `${createHeader()}
//                         ${createBody()}
//                         ${createFooter()}`;
// });
