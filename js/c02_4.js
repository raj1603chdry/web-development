/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-27T23:13:37+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c02_4.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-27T23:36:14+05:30
 * @Copyright: Raj Choudhary
 */


// declaring variables
var inStock;
var shipping;

inStock = true;
shipping = false;

elStock = document.getElementById('stock');
elShipping = document.getElementById('shipping');

elStock.className = inStock;
elShipping.className = shipping;
