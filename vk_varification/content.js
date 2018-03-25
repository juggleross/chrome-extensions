var page_name = document.getElementsByClassName("page_name")[0];

verification = document.createElement('a');
verification.setAttribute('href', '/verify');
verification.className = 'page_verified';

verification.onmouseover = function() {
  pageVerifiedTip(this, {type: 1, oid: 1});
};

page_name.appendChild(verification);




