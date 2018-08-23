## 1. Add manifest.json file
```json
  {
    "name": "VK subscribers count",
    "version": "1.0",
    "manifest_version": 2
  }
```
## 2. Create content.js file

```js

```
## 3. Include content.js to manifest.json inside content_scripts

```json
  {
    "name": "VK subscribers count",
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
