/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-31T22:25:01+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c05_5.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-31T22:27:04+05:30
 * @Copyright: Raj Choudhary
 */


// creating NodeList
var el = document.querySelectorAll('li.hot');

if(el.length > 0) {
  for(var i = 0; i < el.length; i++)
    el[i].className = 'cool';
}
