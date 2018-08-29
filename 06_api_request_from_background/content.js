console.log('Content script is running')

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
  let selectedText = window.getSelection().toString().trim();
  console.log(selectedText);
  if(selectedText.length > 0) {
    let message = {
      text: selectedText
    }
    chrome.runtime.sendMessage(message);
  }
}
