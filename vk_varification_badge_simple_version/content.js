if(varificationBageDoesNotExist()) addVerificationBage();

function addVerificationBage() {
  let page_name = document.getElementsByClassName("page_name")[0];

  let verification = document.createElement('a');
  verification.setAttribute('href', '/verify');
  verification.className = 'page_verified';

  page_name.appendChild(verification);
}

function varificationBageDoesNotExist() {
  return document.getElementsByClassName('page_verified').length < 1 ? true : false
}
