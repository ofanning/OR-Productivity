functionName = function functionName2 (link) {
    var current = window.location.href;
    if (current.includes(link)) {
        document.body.innerHTML = "";
        document.body.innerHTML = "Blocked LOL";
    }
}

functionNAme("youtube.com");

