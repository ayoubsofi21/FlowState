export const getTasks = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};
export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
export const addTaskToStorage = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
};
export const removeTaskFromStorage = (id) => {
  const tasks = getTasks();
  const filtered = tasks.filter((t) => t.id !== id);
  saveTasks(filtered);
};
