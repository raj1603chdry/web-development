/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-27T22:54:49+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c02_2.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-27T23:03:00+05:30
 * @Copyright: Raj Choudhary
 */


// declaring variables
var username;
var message;

username = 'Molly';
message = 'See our upcoming range';

var elName = document.getElementById('name');
var elNote = document.getElementById('note');
elName.textContent = username;
elNote.textContent = message;
