## Manifest
```json
{
  "name": "My test extension",
  "version": "1",
  "manifest_version": 2,
  "background": {
    "scripts":["background.js"]
  },
  "content_scripts": [
    {
      "matches": ["http://*/*", "https://*/*"],
      "js": ["contentscript.js"]
    }
  ],
  "permissions": [
    "tabs"
  ]
}
```
## background.js
```js
chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    // read changeInfo data and do something with it
    // like send the new url to contentscripts.js
    if (changeInfo.url) {
      chrome.tabs.sendMessage( tabId, {
        message: 'hello!',
        url: changeInfo.url
      })
    }
  }
);
```

## Now you just need to listen for that data in your content script:
## contentscript.js
```js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // listen for messages sent from background.js
    if (request.message === 'hello!') {
      console.log(request.url) // new url is now in content scripts!
    }
});
```
