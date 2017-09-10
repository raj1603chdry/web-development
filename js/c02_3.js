/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-27T23:04:26+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c02_3.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-27T23:12:22+05:30
 * @Copyright: Raj Choudhary
 */


// declaring variable
var title;
var message;

title = "Molly's Special Offers";
message = '<a href\"sale.html\">25% off!</a>';

var elTitle = document.getElementById('title');
var elNote = document.getElementById('note');

elTitle.innerHTML = title;
elNote.innerHTML = message;
