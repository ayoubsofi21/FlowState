let interval = null;
let time = 25 * 60;

const updateDisplay = () => {
  const display = document.getElementById("timerDisplay");
  if (!display) return;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  display.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const startTimer = () => {
  if (interval) return;

  interval = setInterval(() => {
    time--;
    updateDisplay();

    if (time <= 0) {
      clearInterval(interval);
      interval = null;
      alert("Pomodoro terminé !");
      time = 25 * 60;
      updateDisplay();
    }
  }, 1000);
};

export const stopTimer = () => {
  clearInterval(interval);
  interval = null;
};
