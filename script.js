console.log('*****************content script*******************');

//This page will actually take the packaged user input from opt.js and change the body where there is a url match

//get the stored urls and call block with them

chrome.storage.sync.get(['saveArrayKey'], function(items) {
    //NEED TO FIGURE OUT HOW TO ALSO GET STORED DATA FOR TOGGLE BUTTON AND 
    //THEN ALSO PASS THAT INTO THE BLOCK() FUNCTION.
    console.log("storage");
    
    
    console.log("value is currently " + items.saveArrayKey[0]);
    block(items.saveArrayKey);
});


//
function block(saveArrayKey){
    //if toggle turned on in stored data, then...
    console.log("made it block functoin");
    console.log((window.location.href).includes(saveArrayKey[0]));
    
    for (let i = 0; i < 5; i++) {
         if((window.location.href).includes(saveArrayKey[i])) {
            console.log("block " + saveArrayKey[i]);
            document.body.innerHTML = "";
            document.body.innerHTML = "Get back to work!!!";
            break;
         }
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

