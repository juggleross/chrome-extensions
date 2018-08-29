## 1. Add manifest.json file
```json
  {
    "name": "PopUp start",
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
    "permissions": ["tabs"],
    "browser_action": {
      "default_icon": "ct.png",
      "default_popup": "popup.html",
      "default_title": "A popup"
    }
  }

```
## 2. Create popup.html page

```html
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>

    </head>
    <body>
      <h1>Paragraph replacer</h1>
      <input id="userinput" type="text"></input>
    </body>
    <script src="action.js"></script>
  </html>
```

## 2. Sending message from action.js to content.js

```js
  // action.js
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

```

## 3. Receiving message from action.js to content.js

```js
  // content.js
  chrome.runtime.onMessage.addListener(gotMessage);

  function gotMessage(message, sender, sendResponse) {
    let paragraphs = document.getElementsByTagName('p');

    for (el of paragraphs) {
      el.innerHTML = message.txt;
    }
    console.log(message.txt);
  }


```

## 4. Open chrome://extensions and add your script.
