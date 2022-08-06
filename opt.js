 
//build an array or object of the stuff from the user we need to save
//probably need the array for the user urls and then something else for the toggle button?

function buildSaveArray() {
    //blank array that will be populated with user urls
    let saveArray = [];

    //get an HTMLcollection of the user urls then put them into an actual array
    //so that they can be operated on with js
    saveArray[0] = document.getElementById('url1').value;
    saveArray[1] = document.getElementById('url2').value;
    saveArray[2] = document.getElementById('url3').value;
    saveArray[3] = document.getElementById('url4').value;
    saveArray[4] = document.getElementById('url5').value;


    //call save_options with our newly minted array
    saveUrls(saveArray)
}

//gets the value of the toggle html button, which defaults to
//"on" when it is checked, and return a boolean value
function getToggleValue() {
    if (document.getElementById('block_toggle').value == "on") {
        return true;
    } else {
        return false;
    }
}

//save the array/object using chrome.storage.sync.set or chrome.storage.local.set
function saveURLS(saveArray) {
    //save the url array with the chrome storage api
    chrome.storage.sync.set({
        saveArrayKey: saveArray
    }, function() {
        // this function will show the user that their options are saved
        let status = document.getElementById('status');
        status.textContent = 'options saved.';
        //timer to change the status back to unsaved??? maybe remove
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
    //might need to add part saving the toggle value, but I think probably not
} 








//new function to restore all the user inputs each time the opt.html is opened
function restoreUrls() {
    chrome.storage.sync.get(['saveArrayKey'], function(urlArray) {
        var urlInput = document.getElementsByClassName('userUrl');
        for (let i = 0; i < 5; i++) {
            urlInput[i].value = items.saveArrayKey[i];
        }
    });
}




document.addEventListener('DOMContentLoaded', restoreUrls);
document.getElementById('save').addEventListener('click', buildSaveArray);