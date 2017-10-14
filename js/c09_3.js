if(window.sessionStorage) {
  var txtUsername = document.getElementById('username');
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = window.sessionStorage.getItem('username');
  txtAnswer.value = window.sessionStorage.getItem('answer');

  txtUsername.addEventListener('input', function () {
    window.sessionStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {
    window.sessionStorage.setItem('answer', txtAnswer.value);
  }, false);
}
