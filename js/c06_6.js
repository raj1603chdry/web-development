// declaring function
function checkLength(e, minLength) {
  var elMsg, el;

  if(!e) {
    e = window.event;
  }

  el = e.target || e.srcElement;
  elMsg = el.nextSibling;

  if(el.value.length < minLength) {
    elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
  } else {
    elMsg.textContent = '';
  }
}

var elUsername = document.getElementById('username');
if(elUsername.addEventListener) {
  elUsername.addEventListener('blur', function(e) {
    checkLength(e, 5);
  }, false);
} else {
  elUsername.attachEvent('onblur', function(e) {
    checkLength(e, 5);
  });
}
