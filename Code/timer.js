const value = document.querySelector("#time");
const startBtn = document.querySelector("#btn-start")
const resetBtn = document.querySelector("#btn-reset");

startBtn.addEventListener('click', function(){
    var minute = 1;
    var sec = 3;
    setInterval(function(){
        if(sec < 0){
            minute--;
            sec = 3;
        }
        if(sec <=9){
            sec = "0" + sec;
        }
        if(sec == 0 && minute == 0){
            alert("DONE!");
            location.reload();
        }
        value.innerHTML = minute + ":" + sec;
        sec--;
    }, 1000);
});
resetBtn.addEventListener('click', function(){
        location.reload();
})