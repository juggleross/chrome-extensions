function onExtencionClick(tab) {
  if(tab.url.indexOf('youtube.com') !== -1) {
     chrome.tabs.create({ url: tab.url.replace("youtube.com", "ssyoutube.com") })
  }
}

chrome.browserAction.onClicked.addListener(onExtencionClick);
