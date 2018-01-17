if(window.localStorage) {
  var txtUsername = document.getElementById('username');
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = window.localStorage.getItem('username');
  txtAnswer.value = window.localStorage.getItem('answer');

  txtUsername.addEventListener('input', function () {
    window.localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {
    window.localStorage.setItem('answer', txtAnswer.value);
  }, false);
}
