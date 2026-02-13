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
    <footer class="fixed bottom-0 w-full bg-gray-200 shadow-lg flex justify-around items-center p-4">

      <!-- Home Icon -->
     <button id="home" class="footer-btn flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-gray-300 transition" > <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.75L12 3l9 6.75V21a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 21V9.75z" /> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22V12h6v10" /> </svg> </button>

      <!-- Calendar Icon -->
      <button class="footer-btn flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-gray-300 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      <!-- Profile/User Icon -->
        <button id="profil" class="footer-btn flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-gray-300 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <!-- Head -->
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
          <!-- Body -->
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6" />
        </svg>
      </button>

    </footer>
  `;
};
export const profil = () => {
  return `<div  class="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">

    <!-- Profile Section -->
    <div class="flex items-center space-x-4 mb-6">
      <img src="https://via.placeholder.com/60" alt="Profile" class="w-16 h-16 rounded-full border-2 border-indigo-500">
      <div>
        <h1 class="text-xl font-semibold text-gray-800">Ayoub Sofi</h1>
        <p class="text-gray-500 text-sm">Productivity Enthusiast</p>
      </div>
    </div>

    <!-- To-Do List Header -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-medium text-gray-700">My Tasks</h2>
      <button class="bg-indigo-500 text-white px-3 py-1 rounded-lg hover:bg-indigo-600 transition">+ Add</button>
    </div>

    <!-- To-Do List -->
    <ul class="space-y-3">
      <li class="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
        <span class="text-gray-700">Learn JavaScript</span>
        <input type="checkbox" class="w-5 h-5 accent-indigo-500">
      </li>
      <li class="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
        <span class="text-gray-700 line-through">Build App</span>
        <input type="checkbox" checked class="w-5 h-5 accent-indigo-500">
      </li>
      <li class="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
        <span class="text-gray-700">Write Blog Post</span>
        <input type="checkbox" class="w-5 h-5 accent-indigo-500">
      </li>
    </ul>

  </div>`;
};
