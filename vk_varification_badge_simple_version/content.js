function addVerificationBage() {
  let page_name = document.getElementsByClassName("page_name")[0];

  let verification = document.createElement('a');
  verification.setAttribute('href', '/verify');
  verification.className = 'page_verified';

  if(page_name !== undefined) page_name.appendChild(verification);
}

function varificationBageDoesNotExist() {
  return document.getElementsByClassName('page_verified').length < 1 ? true : false
}


// выбираем целевой элемент
var target = document.querySelector('#utils');

// создаём экземпляр MutationObserver
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if(varificationBageDoesNotExist()) addVerificationBage();
  });
});

// конфигурация нашего observer:
var config = { attributes: true, childList: true, characterData: true };

// передаём в качестве аргументов целевой элемент и его конфигурацию
observer.observe(target, config);
