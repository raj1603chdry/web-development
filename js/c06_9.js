// declaring functions
function checkUsername() {
  var username = el.value;
  if(username.length < 5) {
    elMsg.className = 'warning';
    elMsg.textContent = 'Not long enough, yet...';
  } else {
    elMsg.textContent = '';
  }
}

function tipUsername() {
  elMsg.className = 'tip';
  elMsg.textContent = 'Username must be at least 5 characters long';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

// adding evenet listeners for focus and blur events
el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);
