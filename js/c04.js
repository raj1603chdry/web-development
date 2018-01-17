/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-31T00:02:40+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c04.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-31T00:16:44+05:30
 * @Copyright: Raj Choudhary
 */


var table = 3;
var operator = 'multiplication';
var i = 1;
var msg = '';

if(operator === 'addition') {
  while(i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  while(i < 11) {
    msg += i + ' X ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

var elBlackboard = document.getElementById('blackboard');
elBlackboard.innerHTML = msg;
