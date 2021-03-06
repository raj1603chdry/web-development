var username = document.getElementById('username');
var elMsg = document.getElementById('feedback');

// declaring function to check userName
function checkUsername(minLength) {
  if(username.value.length < minLength) {
    elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
  } else {
    elMsg.textContent = '';
  }
}

// for IE fallback
if(username.addEventListener) {
  username.addEventListener('input', function() {
    checkUsername(5);
  }, false);
} else {
  username.attachEvent('oninput', function() {
    checkUsername(5);
  }, false);
}
