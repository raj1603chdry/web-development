/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-31T22:08:46+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c05_3.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-31T22:11:29+05:30
 * @Copyright: Raj Choudhary
 */


// selecting elements of a specific tag
var el = document.getElementsByTagName('li');

// if elements exist in nodeList, updating class of first li
if(el.length > 0) {
  var element = el[0];
  element.className = 'cool';
}
