/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-31T22:03:50+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c05_2.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-31T22:07:21+05:30
 * @Copyright: Raj Choudhary
 */


// finding items with specific class attribute
var el = document.getElementsByClassName('hot');

// if there are more than 2 elements change the class of the 3rd
if(el.length > 2) {
  var element = el[2];
  element.className = 'cool';
}
