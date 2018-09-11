## 1. Add manifest.json file
```json
  {
    "name": "Music playing",
    "version": "1.0",
    "manifest_version": 2
  }
```
## 2. Create content.js file

```js
  document.addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        var myAudio = new Audio();
        let src = "creepy_sound.mp3"
        let url = chrome.extension.getURL(src);
        myAudio.src = url;
        myAudio.play();
      }
  });
```
## 3. Include content.js and web_accessible_resources to manifest.json inside content_scripts

```json
  {
    "name": "Music playing",
    "version": "1.0",
    "manifest_version": 2,
    "web_accessible_resources": [
      "*.mp3"
    ],
    "content_scripts": [
      {
        "matches": [
          "<all_urls>"
        ],
        "js": ["content.js"]
      }
    ]
  }

```
## 4. Open chrome://extensions and add your script.
