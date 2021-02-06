document.addEventListener("DOMContentLoaded", function(event) {
document.getElementById('pais').addEventListener('change', function(){
chrome.tabs.executeScript(null, {file: 'alert.js'}, function() {
    chrome.tabs.sendMessage(null, 'test');
});
});
  });