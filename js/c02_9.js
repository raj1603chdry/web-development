/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T00:21:14+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c02_9.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T00:37:18+05:30
 * @Copyright: Raj Choudhary
 */


// declaring variables
var subtotal = (13 + 1) * 5;
var shipping = 0.5 * (13 + 1);
var total = subtotal + shipping;

var elSubtotal = document.getElementById('subtotal');
var elShipping = document.getElementById('shipping');
var elGrandTotal = document.getElementById('grandtotal');

elSubtotal.textContent = subtotal;
elShipping.textContent = shipping;
elGrandTotal.textContent = total;
