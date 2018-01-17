/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-31T22:18:17+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c05_4.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-31T22:20:02+05:30
 * @Copyright: Raj Choudhary
 */


// selecting element using css selector
var el = document.querySelector('li.hot');
el.className = 'cool';

// selecting nodeList using css selectors
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';
