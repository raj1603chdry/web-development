/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T16:52:16+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c03_1.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T17:30:43+05:30
 * @Copyright: Raj Choudhary
 */


var message = 'Sign up to receive our newsletter for 10% off!';

function updateMessage() {
  var elMessage = document.getElementById('message');
  elMessage.textContent = message;
}
updateMessage();
