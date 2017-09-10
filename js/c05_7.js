/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-31T22:57:14+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c05_7.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-31T23:04:25+05:30
 * @Copyright: Raj Choudhary
 */


// selecting the starting point
var start = document.getElementsByTagName('ul')[0];
var first = start.firstChild;
var last = start.lastChild;

first.className = 'complete';
last.className = 'cool';

/*
  IT WON'T WORK UNTIL THE WHITESPACES ARE REMOVED FROM THE HTML CODE
*/
