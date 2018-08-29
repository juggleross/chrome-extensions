let input = document.getElementById("input-word");
input.addEventListener("input", inputHandler);

function inputHandler(event) {
  chrome.storage.sync.set({word: input.value}, function() {
    console.log('Value is set to ' + input.value);
  });
}
