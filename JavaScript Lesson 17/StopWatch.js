window.onload = function() {
    var second = 0;
    var milliseconds = 0;
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        milliseconds = "00";
        seconds = "00";
        appemdmilliseconds.innerHTML = milliseconds;
        appendSeconds.innerHTML = seconds;
    }
    function startTimer() {
        milliseconds++;

        if (milliseconds <= 9) {
            appemdmilliseconds.innerHTML = "0" + milliseconds;
        }

        if (milliseconds > 9) {
            appemdmilliseconds.innerHTML = milliseconds;
        }

        if (milliseconds > 99) {
            second++;
            appendSeconds.innerHTML = "0" + second;
            milliseconds = 0;
            appemdmilliseconds.innerHTML = "0" + 0;
        }
        
        if (second > 9) {
            appendSeconds.innerHTML = seconds;
        }

        
    }
    
}
        
    