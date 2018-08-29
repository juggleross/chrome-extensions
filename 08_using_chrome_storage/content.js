let main_page = document.getElementsByTagName('html')[0];

chrome.storage.sync.get(['word'], function(result) {
  if(result.word !== undefined && result.word.length > 0 ) {
    main_page.innerHTML = result.word;
  }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) {
    var storageChange = changes[key];
    if(storageChange.newValue !== undefined && storageChange.newValue.length > 0 ) {
      console.log('Value currently is ' + storageChange.newValue);
      main_page.innerHTML = storageChange.newValue;
    }
  }
});
