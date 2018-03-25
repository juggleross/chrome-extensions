function onExtencionClick(tab) {
  chrome.tabs.executeScript(null, {file: "content.js"}, function() {
    // some additions actions
  });
}

chrome.browserAction.onClicked.addListener(onExtencionClick);
chrome.tabs.onUpdated.addListener(onExtencionClick);
