chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

    chrome.tabs.executeScript({file: "cs.js"});

  }
})
chrome.tabs.onCreated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

    chrome.tabs.executeScript({file: "cs.js"});

  }
})