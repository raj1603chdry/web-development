/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-27T22:16:47+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c02_1.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-27T22:24:54+05:30
 * @Copyright: Raj Choudhary
 */



// declaring three variables to store information
var price;
var quantity;
var total;

// assiging values to variables
quantity = 14;
price = 5;

total = quantity * price;

var el = document.getElementById('cost');
el.textContent = '$' + total;
