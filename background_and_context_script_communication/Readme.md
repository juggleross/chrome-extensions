## 1. Add manifest.json file
```json
  {
    "name": "Sending and receiving messages",
    "version": "1.0",
    "manifest_version": 2,
    "content_scripts": [
      {
        "matches": [
          "<all_urls>"
        ],
        "js": ["content.js"]
      }
    ],
    "background": {
      "scripts": ["background.js"]
    },
    "browser_action": {
      "default_icon": "ct.png"
    }
  }
```
## 2. Sending message from background.js to content.js

```js
  // background.js
  chrome.browserAction.onClicked.addListener(buttonClicked);

  function buttonClicked(tab) {
    let msg = {
      txt: 'hello'
    }

    chrome.tabs.sendMessage(tab.id, msg)
  }
```

## 3. Receiving message from background.js to content.js

```js
  // content.js
  chrome.runtime.onMessage.addListener(gotMessage);

  function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
  }

```

## 4. Open chrome://extensions and add your script.
