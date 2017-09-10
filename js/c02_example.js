/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T00:47:44+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c02_example.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T01:31:46+05:30
 * @Copyright: Raj Choudhary
 */


// declaring the variables
var usersign = prompt('Enter your name');
var tiles = usersign.length;
var subtotal = tiles * 5;
var shipping = 7;
var grandtotal = subtotal + shipping;

var message1 = 'Hello';
var message3 = 'please check your order';

var message = message1 + ' ' + usersign + ', ' + message3 + ':';

// declaring HTML elements variable
var elMessage = document.getElementById('greeting');
var elUserSign = document.getElementById('usersign');
var elTiles = document.getElementById('tiles');
var elSubTotal = document.getElementById('subtotal');
var elShipping = document.getElementById('shipping');
var elGrandTotal = document.getElementById('grandtotal');

elMessage.textContent = message;
elUserSign.textContent = usersign;
elTiles.textContent = tiles;
elSubTotal.textContent = '$' + subtotal;
elShipping.textContent = '$' + shipping;
elGrandTotal.textContent = '$' + grandtotal;
