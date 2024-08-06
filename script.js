let timers = [null, null];
let startTime = [0, 0];
let elapsedTime = [0, 0];

function startStopwatch(index) {
    if (!timers[index - 1]) {
        startTime[index - 1] = Date.now() - elapsedTime[index - 1];
        timers[index - 1] = setInterval(() => updateStopwatch(index), 1000);
    }
}

function stopStopwatch(index) {
    if (timers[index - 1]) {
        clearInterval(timers[index - 1]);
        timers[index - 1] = null;
        elapsedTime[index - 1] = Date.now() - startTime[index - 1];
    }
}

function resetStopwatch(index) {
    clearInterval(timers[index - 1]);
    timers[index - 1] = null;
    startTime[index - 1] = 0;
    elapsedTime[index - 1] = 0;
    document.getElementById(`time${index}`).innerText = "00:00:00";
}

function updateStopwatch(index) {
    const now = Date.now();
    const diff = now - startTime[index - 1];
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    document.getElementById(`time${index}`).innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}
