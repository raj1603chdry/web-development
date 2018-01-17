/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T22:17:20+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c03_6.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T22:28:20+05:30
 * @Copyright: Raj Choudhary
 */


var message = '<h2>Browser Window</h2><p>Width: ' + window.innerWidth + '</p>';
message += '<p>Height: ' + window.innerHeight + '</p>';
message += '<h2>History</h2><p>Items: ' + window.history.length + '</p>';
message += '<h2>Screen</h2><p>Width: ' + window.screen.width + '</p>';
message += '<p>Height: ' + window.screen.height + '</p>';

var elInfo = document.getElementById('info');
elInfo.innerHTML = message;

alert('Current page ' + window.location);
