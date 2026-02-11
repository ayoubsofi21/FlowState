// ui.js

export const createHeader = () => {
  return `
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
  `;
};

export const createBody = () => {
  return `
  <div class='flex flex-col w-full items-center justify-center '>
  
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-96">
      <h1 class="text-white text-2xl font-bold mb-4 text-center">My To Do List</h1>
      <div class="flex gap-2">
        <input id="taskInput" class="flex-1 p-2 rounded-lg outline-none" placeholder="Add task...">
        <button id="addBtn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
      </div>

     
    </div>
      <ul id="taskList" class="mt-4 "></ul>
     <div class="relative w-56 h-56 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full border-[14px] border-blue-700"></div>
          <span class="text-3xl font-medium text-blue-700">
            25:00
          </span>
        </div>
      </div>
</div>
  `;
};

export const createFooter = () => {
  return `
     <footer class="footer absolute w-full bottom-0 ">
        <button class="footer-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        
        <button class="footer-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7H5" />
            </svg>
        </button>
        
        <button class="footer-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.5 4.5L18 22H6l-1.5-3.5L5 17h5V7a5 5 0 1110 0v10h-5z" />
            </svg>
        </button>
        </footer>

  `;
};

export const addTaskToList = (taskTitle) => {
  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  taskList.appendChild(li);
  li.textContent = taskTitle;
};

// export const clearInputField = () => {
//   document.getElementById("taskInput").value = "";
// };
