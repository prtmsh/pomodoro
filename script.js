document.addEventListener('DOMContentLoaded', function() {
    // Set initial time
    let minutes = 20;
    let seconds = 0;

    // Get references to HTML elements
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const startButton = document.getElementById('start-button');

    // Function to update the timer display
    function updateDisplay() {
        minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    // Function to start the timer
    function startTimer() {
        timer = setInterval(function() {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                seconds = 59;
                minutes--;
            } else {
                clearInterval(timer);
                // Here you can add code to handle when the timer ends
                alert('Time is up!');
            }
            updateDisplay();
        }, 1000);
    }

    // Event listener for the start button
    startButton.addEventListener('click', function() {
        startTimer();
        // Disable the start button after it's clicked to prevent multiple timers running simultaneously
        startButton.disabled = true;
    });

    // Initial display update
    updateDisplay();
});
