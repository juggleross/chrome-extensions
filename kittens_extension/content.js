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
