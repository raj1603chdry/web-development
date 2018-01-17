/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-31T22:50:57+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c05_6.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-31T22:55:11+05:30
 * @Copyright: Raj Choudhary
 */


var el = document.getElementById('two');

el.previousSibling.previousSibling.className = 'complete';
el.nextSibling.nextSibling.className = 'cool';

/*
the nextsibling and previousSibling DOM manipulators are used twice
because whitespaces are also made a node in all browser except IE.

Instead of using the DOM manipulators, the whitespaces can be removed
from the HTML code. But it will make the code harder to read

REFER JON DUCKETT JAVASCRIPT AND JQUERY PG 209
*/
