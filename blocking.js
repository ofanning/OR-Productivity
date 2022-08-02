blcoker = function blocking (link) {
    var current = window.location.href;
    if (current.includes(link)) {
        document.body.innerHTML = "";
        document.body.innerHTML = "Blocked LOL";
    }
}

blocker("youtube.com");

/* https://www.youtube.com/watch?v=dIrXIJ781DQ */

//let cb = document.querySelector('#blocked_button');
if (window.location.hostname =="www.youtube.come")
{
    alert("this is youtube");
}
//Check the state of the checked attribute
/*if (cb.checked)
{
    if (window.location.hostname == "www.youtube.com"){
        document.body.innerHTML = "Blocked LOL";
    }
}*/


