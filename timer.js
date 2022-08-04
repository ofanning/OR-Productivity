var min = 0;
var sec = 0;
var startchr = 0;       // used to control when to read data from form

function countdownTimer() {
  // https://coursesweb.net/javascript/
  // if $startchr is 0, and form fields exists, gets data for minutes and seconds, and sets $startchr to 1
  if(startchr == 0 && document.getElementById('mns') && document.getElementById('scs')) {
    // makes sure the script uses integer numbers
    min = parseInt(document.getElementById('mns').value) + 0;
    sec = parseInt(document.getElementById('scs').value) * 1;

    // if data not a number, sets the value to 0
    if(isNaN(min)) min = 0;
    if(isNaN(sec)) sec = 0;

    // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
    document.getElementById('mns').value = min;
    document.getElementById('scs').value = sec;
    startchr = 1;
    document.getElementById('btnct').setAttribute('disabled', 'disabled');     // disable the button
  }

  // if minutes and seconds are 0, sets $startchr to 0, and return false
  if(min==0 && sec==0) {
    startchr = 0;
    document.getElementById('btnct').removeAttribute('disabled');     // remove "disabled" to enable the button

    /* HERE YOU CAN ADD TO EXECUTE A JavaScript FUNCTION WHEN COUNTDOWN TIMER REACH TO 0 */

    return false;
  }
  else {
    // decrease seconds, and decrease minutes if seconds reach to 0
    sec--;
    if(sec < 0) {
      if(min > 0) {
        sec = 59;
        min--;
      }
      else {
        sec = 0;
        min = 0;
      }
    }
  }

  // display the time in page, and auto-calls this function after 1 seccond
  document.getElementById('showmns').innerHTML = min;
  document.getElementById('showscs').innerHTML = sec;
  setTimeout('countdownTimer()', 1000);
}