## 1. Add manifest.json file
```json
  {
    "name": "Kitten extension",
    "version": "1.0",
    "manifest_version": 2
  }
```
## 2.1 Add some images
## 2. Create content.js file

```js
  let filenames = [
    "cat1.jpeg",
    "cat2.jpeg",
    "cat3.jpeg",
    "cat4.jpeg"
  ];

  let imgs = document.getElementsByTagName('img');

  for (imgElm of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let src = 'images/' + filenames[r];
    let url = chrome.extension.getURL(src);
    imgElm.src = url;
    console.log(imgElm.src);
  }

```
## 3. Include content.js to manifest.json inside content_scripts

```json
{
  "name": "Kitten extension",
  "version": "1.0",
  "manifest_version": 2,
  "web_accessible_resources": [
    "images/*.jpeg"
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
