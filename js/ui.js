export const createHeader = () => {
  return `
    <header class="bg-gray-200 h-16 flex items-center justify-between px-4 md:px-20 shadow-sm">
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

export function createBody() {
  return `
  <div class="min-h-screen flex flex-col items-center justify-start px-4 md:px-10 lg:px-20 py-6 bg-gray-100">

    <!-- Main Container -->
    <div class="w-full max-w-6xl flex flex-col lg:flex-row gap-10">

      <!-- LEFT SIDE (Todo Card) -->
      <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-full lg:w-1/2">
        <h1 class="text-white text-2xl font-bold mb-4 text-center lg:text-left">
          My To Do List
        </h1>

        <div class="flex gap-2">
          <input id="taskInput"
            class="flex-1 p-2 rounded-lg outline-none"
            placeholder="Add task...">
          <button id="addBtn"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add
          </button>
        </div>

        <div class="regexMessage mt-2"></div>

        <ul id="taskList" class="mt-6 space-y-3"></ul>
      </div>


      <!-- RIGHT SIDE (Timer Card) -->
      <div class="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 w-full lg:w-1/2">

        <div class="relative w-56 h-56 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full border-[14px] border-blue-700"></div>

          <span id="timerDisplay"
                class="text-4xl font-semibold text-blue-700">
            25:00
          </span>
        </div>

        <div class="flex gap-4 mt-8">
          <button id="startTimer"
            class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition">
            START
          </button>

          <button id="stopTimer"
            class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition">
            STOP
          </button>
        </div>

      </div>

    </div>
  </div>
  `;
}

export const createFooter = () => {
  return `
    <footer class="fixed bottom-0 w-full bg-gray-200 shadow-lg flex justify-around items-center p-4 md:relative md:mt-10">

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
  return `<div class="bg-white rounded-2xl shadow-lg w-full max-w-md md:max-w-3xl lg:max-w-5xl p-6 md:p-10 mb-12 mx-auto">
            <div class="min-h-screen">
                <!-- Profile Section -->
                <div class="flex items-center space-x-4 mb-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLn2vN-qAufnhM8t2e4OkZ6-m3Md6_Gk9B7g&s" alt="Profile" class="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-indigo-500">
                    <div>
                        <h1 class="text-xl md:text-2xl font-semibold text-gray-800">Ayoub Sofi</h1>
                        <p class="text-gray-500 text-sm md:text-base">Productivity Enthusiast</p>
                    </div>
                </div>

                <div class="inline-block bg-white rounded-xl shadow-md px-6 md:px-8 py-4 md:py-6 text-center text-lg md:text-xl font-medium cursor-pointer hover:shadow-lg  w-full hover:-translate-y-1 transition-transform">
                    Start Your Day <br> & Be Productive ✌️
                </div>

                <div class="flex justify-between items-center mt-6 mb-4">
                    <h2 class="text-lg md:text-xl font-medium text-gray-700">My Tasks</h2>
                </div>

                <ul id="taskList" class="space-y-3"></ul>
            </div>
        </div>`;
};
// export const TASK = () => {
//   return `<div class="flex justify-between items-center mb-4">
//       <h2 class="text-gray-700 font-semibold">Recent Tasks</h2>
//       <button class="text-gray-500 text-sm">See all</button>
//     </div>

//     <!-- Task List -->
//     <ul id="taskList" class="space-y-3"></ul>`;
// };
