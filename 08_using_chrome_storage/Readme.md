## manifest.js
## You must declare the "storage" permission in the extension manifest to use the storage API. For example:
```json
{
  "name": "My extension",
  ...
  "permissions": [
    "storage"
  ],
  ...
}

```

## then use storage whenever you want

```js

chrome.storage.sync.set({key: value}, function() {
  console.log('Value is set to ' + value);
});

chrome.storage.sync.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
});

```

## and you can use update event for it

```js

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) {
    var storageChange = changes[key];
    if(storageChange.newValue !== undefined && storageChange.newValue.length > 0 ) {
      console.log('Value currently is ' + storageChange.newValue);
      main_page.innerHTML = storageChange.newValue;
    }
  }
});

```
