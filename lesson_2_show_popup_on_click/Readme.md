## 1. Add manifest.json file
```json
  {
    "name": "Show popup",
    "version": "1.0",
    "manifest_version": 2
  }

```
## 2. Create popup.html file

```html
  <h1>
    Hello world!
  </h1>
```
## 3. Include popup.html file to manifest.json inside browser_action

```json
  {
    "name": "Show popup",
    "version": "1.0",
    "manifest_version": 2,
    "browser_action": {
      "default_popup": "popup.html"
    }
  }
```
## 4. Open chrome://extensions and add your script.
