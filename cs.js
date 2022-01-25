chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log(message);
});
var selector = 'div.lobby-room-list-item';
// max time to wait (in seconds)
var maxSeconds = 5;
// time spend (in seconds)
var timer = 1;

// refresh every second
var refreshId = setInterval(() => {
  // check if dom exists
  if (document.querySelector(selector)) {
    // clear interval
    clearInterval(refreshId);

    var elements=document.querySelectorAll('div.lobby-room-list-item');
    for ( var i=0; i<elements.length; i++) {
		if(elements[i].innerHTML.indexOf("Brasil") !== -1){
		elements[i].style.display="none";
		}
    }
  }
  // check if timeout
  if (timer++ >= maxSeconds) {
    clearInterval(refreshId);
  }
}, 200);






