chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  let paragraphs = document.getElementsByTagName('p');

  for (el of paragraphs) {
    el.innerHTML = message.txt;
  }
  console.log(message.txt);
}
