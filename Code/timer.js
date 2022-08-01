function start() {
    var countdownTimer = setInterval('timer()', 1000);
  }

  function timer(){
    var hours = parseInt(document.getElementById("hours").value, 0);
    var minutes = parseInt(document.getElementById("minutes").value, 0);
    var seconds = parseInt(document.getElementById("seconds").value, 0);
    var currentsec = (((hours * 3600) + (minutes * 60) + seconds));  //the current time left in seconds
    if (currentsec > 0) {
            var final = then - date;
            var hh = Math.floor((final / (1000 * 60 * 60)) % 24);
            var mm = Math.floor((final / 1000 / 60) % 60);
            var ss = Math.floor((final / 1000) % 60);
            document.getElementById("display").innerHTML = "Time Remaining: " + hh + "H " + mm + "M " + ss + "S";
            document.getElementById("message").innerHTML = then;
            if (final < 0) {
              clearInterval(countdownTimer);
              document.getElementById("message").innerHTML = "Expired";
            }
        //take one second away, and rerender the seconds split into d, h, m, and s in the html, which you will reuse next time timer() runs
    } else {
        document.getElementById("display").innerHTML = " ";
        document.getElementById("message").innerHTML = "Countdown Not Started";
    }
}
