let userinput = document.getElementById('userinput');
userinput.addEventListener("change", myFunction);

function myFunction() {
  let params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let message = userinput.value;
    let msg = {
      txt: message
    }
    chrome.tabs.sendMessage(tabs[0].id, msg)
  }

}
