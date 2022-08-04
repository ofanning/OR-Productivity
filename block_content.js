//Going to load a list with the urls typed into block.html by the user
/*const numUrls = 5;
createarray(urls, numUrls, "");
for (let i = 0; i < numUrls; i++){

}*/




blocker = function blocking (link) {
    var currentURL = window.location.href;
    if (current.includes(link)) {
        document.body.innerHTML = "Blocked LOL";
    }
}

blocker("youtube.com");

