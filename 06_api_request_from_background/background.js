console.log('Background is running!');

chrome.runtime.onMessage.addListener(receiver);

window.word = '';

function receiver(request, sender, sendResponse) {
  console.log(request.text);
  word = request.text;
}
