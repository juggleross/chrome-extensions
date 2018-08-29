let params = {
  active: true,
  currentWindow: true
}

let input = document.getElementById("input-word");
input.addEventListener("input", inputHandler);

function inputHandler(event) {
  chrome.storage.sync.set({word: input.value}, function() {
    console.log('Value is set to ' + input.value);
  });
  chrome.tabs.query(params, gotTabs);
}

function gotTabs(tabs) {
  let message = input.value;
  let msg = {
    txt: message
  }
  chrome.tabs.sendMessage(tabs[0].id, msg)
}
