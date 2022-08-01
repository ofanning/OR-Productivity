function start() {
    var countdownTimer = setInterval('timer()', 1000);
  }

  function timer(){
    var hours = parseInt(document.getElementById("hours").value, 0);
    var minutes = parseInt(document.getElementById("minutes").value, 0);
    var seconds = parseInt(document.getElementById("seconds").value, 0);
    var currentsec = (((hours * 3600) + (minutes * 60) + seconds));  //the current time left in seconds
    if (currentsec > 0) {
        //take one second away, and rerender the seconds split into d, h, m, and s in the html, which you will reuse next time timer() runs
    } else {
        //expired
    }
}

window.onload=function(){
	var myInput=document.createElement("input");
	myInput.setAttribute("type","text");
	myInput.setAttribute("id","minutes");
	
	var myButton=document.createElement("input");
	myButton.setAttribute("type","button");
	myButton.setAttribute("value","Start Timer");
	
	myButton.onclick=function(){
		startCounter();	
		
	}
	document.getElementById("inputArea").appendChild(myInput);
	document.getElementById("inputArea").appendChild(myButton);
}