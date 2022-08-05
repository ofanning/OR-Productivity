console.log('*****************content script*******************');

//This page will actually take the packaged user input from opt.js and change the body where there is a url match

//get the stored urls and call block with them

chrome.storage.sync.get({
    urlArray: []
}, function(items) {
    //NEED TO FIGURE OUT HOW TO ALSO GET STORED DATA FOR TOGGLE BUTTON AND 
    //THEN ALSO PASS THAT INTO THE BLOCK() FUNCTION.
    console.log("storage");
    block(items.urlArray);
});


//
function block(urlArray){
    //if toggle turned on in stored data, then...
    console.log("block");
    for (let i = 0; i < urlArray.length; i++) {
        blockHelper(urlArray[i]);
    }
    
    
    
    
    //check each of the urls in storage to see if there is a match with the actual
    //web page document url the injected script is running on rn
    // for (let i = 0; i < urlArray.length; i++) {
        
    //     if (window.location.href.includes(urlArray[i])) {
    //         match = true;
    //         break;
    //     }
    // }

    //this is actually redundant and should go inside the if within the loop maybe?
    // if (match) {
    //     //temporary block result, we should make it display a nice looking page
    //     document.body.innerHTML = "blocked LOL";

    // }

}

function blockHelper(obj) {
    console.log("blockhelper");
    console.log(obj);
    console.log(obj.keyword);
}