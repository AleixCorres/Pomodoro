document.addEventListener('DOMContentLoaded', function () {
    const sound = document.getElementById('sound');
    const startButton = document.querySelector('.start');
    const timeWork = 10 //25 * 60

    let timeLeft = timeWork; 
    let isWorking = true;
    let timerId;

    startButton.addEventListener('click', toggleTimer);

    function toggleTimer() {
        if (startButton.textContent === 'Start') {
            startButton.textContent = 'Pause';
            startTimer();
        } else {
            startButton.textContent = 'Start';
            clearInterval(timerId);
        }
    }

    function startTimer() {
        timerId = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft === 0) {
            playSound();
            clearInterval(timerId);
            if (isWorking) {
                timeLeft = getFormBreakTime();
                isWorking = false;
            } else {
                timeLeft = timeWork
                isWorking = true;
            }
            startTimer();
        }
    }

    function playSound() {
        sound.play();
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        startButton.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function getFormBreakTime() {
        let form = document.getElementById("break-form");
        let breakTimeValue = form['break-time'].value;
        breakTimeValue = breakTimeValue * 60;
        return breakTimeValue;
    }
});
