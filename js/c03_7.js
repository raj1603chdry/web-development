/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-08-28T22:29:35+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c03_7.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-08-28T22:37:40+05:30
 * @Copyright: Raj Choudhary
 */


var message = '<p><b>Page title:</b> ' + document.title + '<br />';
message += '<b>Page address:</b> ' + document.URL + '<br />';
message += '<b>Last modified:</b> ' + document.lastModified + '</p>';

var elFooter = document.getElementById('footer');
elFooter.innerHTML = message;
