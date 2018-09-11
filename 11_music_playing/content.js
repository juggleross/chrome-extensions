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
