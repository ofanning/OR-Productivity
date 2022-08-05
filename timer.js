// establish variable names
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var hour = document.getElementById('hour');
var min = document.getElementById('minute');
var sec = document.getElementById('sec');

// store reference to the variable
var startTimer = null;

function timer(){
    // ensure values stay at 0 when user has not input time
    if (hour.value == 0 && min.value == 0 && sec.value ==0){
        hour.value = 0;
        min.value = 0;
        sec.value = 0;
    // count down from whatever value to 0
     } else if(sec.value != 0){
        sec.value--;
     } else if(min.value != 0 && sec.value == 0){
        sec.value = 59;
        min.value--;
     } else if(hour.value != 0 && min.value == 0){
        min.value = 59;
        hour.value--;
     }
     return;
}

function stopTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click', function(){
    // initialize variable startTimer
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        }, 1000);
    }
    startInterval()
})

// reset time to 00:00:00
reset.addEventListener('click', function(){
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
    stopTimer()
})
