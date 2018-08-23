## 1. Add manifest.json file
```json
  {
    "name": "VK simple varification badge",
    "version": "1.0",
    "manifest_version": 2
  }
```
## 2. Create content.js file

```js
  let page_name = document.getElementsByClassName("page_name")[0];

  let verification = document.createElement('a');
  verification.setAttribute('href', '/verify');
  verification.className = 'page_verified';

  page_name.appendChild(verification);
```
## 3. Include content.js to manifest.json inside content_scripts

```json
  {
    "name": "VK simple varification badge",
    "version": "1.0",
    "manifest_version": 2,
    "content_scripts": [
      {
        "matches": [
          "https://vk.com/*"
        ],
        "js": ["content.js"]
      }
    ]
  }
```
## 4. Open chrome://extensions and add your script.
