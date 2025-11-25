// const containerDiv = document.getElementsByClassName("container");
// const appendTime = document.getElementById("timer");
// const appendStart = document.getElementById("start");
// const appendStop = document.getElementById("stop");
// const appendReset = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let isRunning = false;

function updateDisplay() {
  const timerElement = document.getElementById("timer");

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  timerElement.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
  if (isRunning) return; // Давхар start дарахаас хамгаална
  isRunning = true;

  timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  isRunning = false;
  updateDisplay();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// Initial display
updateDisplay();
