//sourced from the rustyzone video

//All this does is inject the script.js into the content of whatever web page you are on everytime
//you refresh or change url

//Need a check to ensure we are not on the chrome tab when we try to insert the script

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(changeInfo.status == 'complete'){
    chrome.scripting.executeScript({
      files: ['script.js'],
      target: {tabId: tab.id}
    })
  }
});

