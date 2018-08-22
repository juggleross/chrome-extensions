## 1. Add manifest.json file
```json
  {
    "name": "Change background color on click",
    "version": "1.0",
    "manifest_version": 2
  }

```
## 2. Create popup.html file

```html
  <html>
    <head>
      <script src="script.js"></script>
    </head>
    <body>
      <button id="lightblue">Light blue</button>
    </body>
  </html>
```
## 3. Create script.js file

```js
  window.addEventListener('load', function load(event) {
    let color = 'lightblue';

    document.getElementById(color).onclick = function() {
      chrome.tabs.query({"active":true,"lastFocusedWindow": true}, function(tabs) {
        chrome.tabs.insertCSS(tabs[0].id, {'code':`html,body,div,p{background:${color}!important}`})
      });
    };
  });

```
## 4. Include popup.html file to manifest.json and add permissions - 'Active tab'

```json
  {
    "name": "Change background color on click",
    "version": "1.0",
    "manifest_version": 2,
    "browser_action": {
      "default_popup": "popup.html"
    },
    "permissions": [
        "activeTab"
    ]
  }
```
## 5. Open chrome://extensions and add your script.
