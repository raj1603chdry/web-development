/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-27T23:24:40+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c02_5.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-27T23:31:34+05:30
 * @Copyright: Raj Choudhary
 */


// declaring variables
var price = 5;
var quantity = 14;
var total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;
