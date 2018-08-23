## 1. Add manifest.json file
```json
  {
    "name": "Change background color on page opening",
    "version": "1.0",
    "manifest_version": 2
  }
```
## 2. Create content.js file

```js
  let paragraphs = document.getElementsByTagName('div');

  for (el of paragraphs) {
    el.style['background-color'] = 'lightblue';
  }
```
## 3. Include content.js to manifest.json inside content_scripts

```json
  {
    "name": "Change background color on page opening",
    "version": "1.0",
    "manifest_version": 2,
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
