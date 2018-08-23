

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if(message.txt === 'hello') {
    let paragraphs = document.getElementsByTagName('div');

    for (el of paragraphs) {
      el.style['background-color'] = 'lightblue';
    }    
  }
  console.log(message.txt);
}
