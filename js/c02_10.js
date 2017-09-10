/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T00:38:08+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c02_10.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T00:46:51+05:30
 * @Copyright: Raj Choudhary
 */


var greeting = 'Howdy';
var name = 'Raj';

var message = greeting + ' ' + name + '!';

var elGreetings = document.getElementById('greetings');
elGreetings.textContent = message;
