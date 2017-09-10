/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-09-01T10:41:18+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c05_8.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-09-01T10:53:16+05:30
 * @Copyright: Raj Choudhary
 */


var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace('pine nuts', 'kale');

itemTwo.firstChild.nodeValue = elText;
