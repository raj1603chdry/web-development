var elMap = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location';

if(Modernizr.geolocation) {
  navigator.geolocation.getCurrentPosition(success, fail);
  elMap.textContent = 'Checking location';
} else {
  elMap.textContent = msg;
}

function success(position) {
  msg = '<h3>Latitude:<br />' + position.coords.latitude + '<br />Longitude:<br />' + position.coords.longitude + '</h3>';
  elMap.innerHTML = msg;
}

function fail(Msg) {
  elMap.textContent = msg;
  console.log(Msg.code);
}
