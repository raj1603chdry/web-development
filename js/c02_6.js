/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-27T23:33:08+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c02_6.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-27T23:36:48+05:30
 * @Copyright: Raj Choudhary
 */


// declaring variables
var inStock = false;
var shipping = true;

inStock = true;
shipping = false;

elStock = document.getElementById('stock');
elShipping = document.getElementById('shipping');

elStock.className = inStock;
elShipping.className = shipping;
