let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word;

// Wordnik API
var wordnik1 = 'http://api.wordnik.com:80/v4/word.json/'
var wordnik2 = '/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false';
var api_key  = '&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';

var url = wordnik1 + word + wordnik2 + api_key;

fetch(url, {})
.then(response => response.json())
.then(data => {
  let word_definition = document.getElementById('word-definition');
  word_definition.innerHTML = data[0].text;
})
