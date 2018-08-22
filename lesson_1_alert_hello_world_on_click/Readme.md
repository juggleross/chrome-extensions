## 1. Add manifest.json file
```json
  {
    "name": "My First Extension",
    "version": "1.0",
    "manifest_version": 2
  }

```
## 2. Create helloworld.js file

```js
  chrome.browserAction.onClicked.addListener(function() {
    alert('Hello, World!');
  })
```
## 3. Include helloworld.js script to manifest.json and add browser_action

```json
  {
    "name": "My First Extension",
    "version": "1.0",
    "manifest_version": 2,
    "background": {
      "scripts": ["helloworld.js"]
    },
    "browser_action": {}
  }
```
## 4. Open chrome://extensions and add your script.
