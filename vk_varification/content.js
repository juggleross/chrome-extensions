if(varificationBageDoesNotExist()) addVerificationBage();


function addVerificationBage() {
  var page_name = document.getElementsByClassName("page_name")[0];

  verification = document.createElement('a');
  verification.setAttribute('href', '/verify');
  verification.className = 'page_verified';

  verification.onmouseover = function() {
    pageVerifiedTip(this, {type: 1, oid: 1});
  };

  page_name.appendChild(verification);
}

function varificationBageDoesNotExist() {
  if(document.getElementsByClassName('page_verified').length < 1) {
    return true;
  } else {
    return false;
  }
}





