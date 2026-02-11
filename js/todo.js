let tasks = [
  { id: 1, title: "Learn JS", completed: false },
  { id: 2, title: "Build App", completed: true },
];

const container = document.querySelector(".container");
export const addTask = () => {
  container.innerHTML = "";
  let card = document.createElement("article");
  card.innerHTML = `
    <header class="bg-gray-200 h-16 flex items-center justify-between px-4 shadow-sm">

        <!-- Back Button -->
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
        <svg xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7" />
        </svg>
        </button>

        <!-- Title -->
        <h1 class="text-lg font-semibold text-gray-800">
        Activity
        </h1>

        <!-- Right Icon Button -->
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
        <svg xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z" />
        </svg>
        </button>

    </header>

    <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-96">
      <h1 class="text-white text-2xl font-bold mb-4 text-center">My To Do List</h1>
      <div class="flex gap-2">
        <input id="taskInput" class="flex-1 p-2 rounded-lg outline-none" placeholder="Add task...">
        <button id="addBtn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
      </div>
      </div>
      <ul id="taskList" class="mt-4 "></ul>

        <div class="w-100 flex justify-center">
            <div class="relative w-56 h-56 flex items-center justify-center ">

                <div class="absolute inset-0 rounded-full border-[14px] border-blue-700"></div>

                <span class="text-3xl font-medium text-blue-700">
                25:00
                </span>

            </div>
        </div>
                <footer class="bg-gray-200 h-16 flex items-center justify-between px-4 fixed bottom-0 w-full shadow-sm">

                        <!-- Back Button -->
                        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 19l-7-7 7-7" />
                        </svg>
                        </button>

                        <!-- Title -->
                        <h1 class="text-lg font-semibold text-gray-800">
                        Activity
                        </h1>

                        <!-- Right Icon Button -->
                        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z" />
                        </svg>
                        </button>

                    </footer>

    </div>

  `;
  container.appendChild(card);
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.title;
    taskList.appendChild(li);
  });
  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");
  addBtn.addEventListener("click", () => {
    const value = taskInput.value.trim();
    if (!value) return;
    const li = document.createElement("li");
    li.textContent = value;
    const taskList = document.getElementById("taskList");
    taskList.appendChild(li);
    let data = {
      id: tasks.length + 1,
      title: value,
      completed: false,
    };
    tasks.push(data);
    // taskInput.value = "";
  });
};
export function navigateToNewPage() {
  // Use window.location.href to navigate to a new page
  window.location.href = "newpage.html";
}

import {
  createHeader,
  createBody,
  createFooter,
  addTaskToList,
  //   clearInputField,
} from "./ui.js";
export const addTask = () => {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  container.innerHTML += createHeader();
  container.innerHTML += createBody();
  container.innerHTML += createFooter();

  const tasks = [
    { id: 1, title: "Learn JS", completed: false },
    { id: 2, title: "Build App", completed: true },
  ];

  tasks.forEach((task) => {
    addTaskToList(task.title);
  });

  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");

  addBtn.addEventListener("click", () => {
    const taskTitle = taskInput.value.trim();
    if (!taskTitle) return;
    addTaskToList(taskTitle);
    clearInputField();
  });
};
