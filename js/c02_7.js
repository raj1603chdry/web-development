/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-27T23:37:29+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c02_7.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T00:13:11+05:30
 * @Copyright: Raj Choudhary
 */


// declaring an array
var colors = ['Blue', 'Red', 'Green', 'Yellow'];
/*
//declaring an array using the Array constructor.
var colors = new Array('Blue', 'Red', 'Green', 'Yellow');
*/

var elColors = document.getElementById('colors');
elColors.textContent = colors[1];
