let tasks = [
  { id: 1, title: "Learn JS", completed: false },
  { id: 2, title: "Build App", completed: true },
];

const container = document.querySelector(".container");
export const addTask = () => {
  container.innerHTML = "";
  let card = document.createElement("article");
  card.innerHTML = `
    <header class="bg-gray-200 shadow-md w-81">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <nav class="space-x-6 flex justify-between w-full rounded-full">
          <a href="#" class="hover:text-white transition">Home</a>
          <a href="#" class="hover:text-white transition">Tasks</a>
        </nav>
      </div>
    </header>

    <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-96">
      <h1 class="text-white text-2xl font-bold mb-4 text-center">My To Do List</h1>
      <div class="flex gap-2">
        <input id="taskInput" class="flex-1 p-2 rounded-lg outline-none" placeholder="Add task...">
        <button id="addBtn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
      </div>
      <ul id="taskList" class="mt-4"></ul>
    </div>
  `;
  container.appendChild(card);
  //   tasks.forEach((task) => {
  //     const li = document.createElement("li");
  //     const taskList = document.getElementById("taskList");

  //     li.className =
  //       "bg-purple-300 rounded-full flex items-center justify-between px-4 py-2 mb-2 cursor-pointer hover:bg-purple-400 transition";

  //     li.innerHTML = `
  //         <span class="text-white font-medium">${task.title}</span>
  //         <button class="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow">
  //             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
  //                 <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
  //             </svg>
  //         </button>
  //     `;
  //     taskList.appendChild(li);
  //   });
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.title;
    taskList.appendChild(li);
  });
  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");
  //   const li = document.createElement("li");
  //   taskList.appendChild(li);

  addBtn.addEventListener("click", () => {
    const value = taskInput.value.trim();
    if (!value) return;

    const li = document.createElement("li");
    li.textContent = value;
    taskList.appendChild(li);

    tasks.push({ id: tasks.length + 1, title: value, completed: false });
    taskInput.value = "";
  });
};
