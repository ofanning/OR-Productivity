blocker = function blocking (link) {
    var current = window.location.href;
    if (current.includes(link)) {
        document.body.innerHTML = "";
        document.body.innerHTML = "Blocked LOL";
    }
}

blocker("youtube.com");

