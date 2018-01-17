/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T00:13:28+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c02_8.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T00:19:34+05:30
 * @Copyright: Raj Choudhary
 */


var colors = new Array('Blue', 'Red', 'Yellow', 'Green');

colors[2] = 'White';

var elColors = document.getElementById('colors');
elColors.textContent = colors[2];
