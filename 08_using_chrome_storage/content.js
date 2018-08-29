chrome.runtime.onMessage.addListener(gotMessage);

let main_page = document.getElementsByTagName('html')[0];

function gotMessage(message) {
  main_page.innerHTML = message.txt;
}

chrome.storage.sync.get(['word'], function(result) {
  if(result.word !== undefined && result.word.length > 0 ) {
    console.log('Value currently is ' + result.word);
    main_page.innerHTML = result.word;
  }
});
