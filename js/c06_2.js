// declaring function to check userName
function checkUsername() {
  var elMsg = document.getElementById('feedback');

  if(this.value.length < 5) {
    elMsg.textContent = 'Username must be 5 characters or more';
  } else {
    elMsg.textContent = '';
  }
}

var username = document.getElementById('username');
username.onblur = checkUsername;
