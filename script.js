console.log('*****************content script*******************');

//This page will actually take the packaged user input from opt.js and change the body where there is a url match

//get the stored urls and call block with them
chrome.storage.sync.get(['saveArrayKey'], function(items) {
    block(items.saveArrayKey);
});



function block(saveArrayKey){
   //for each url entered, if that url is within the current windows url than change the html to block the user
    for (let i = 0; i < 5; i++) {
         if((window.location.href).includes(saveArrayKey[i])) {
            console.log("block " + saveArrayKey[i]);
            document.body.innerHTML = "";
            document.body.innerHTML = "Get back to work!!!";
            break;
         }
    }
    
    
    
    
    

}

