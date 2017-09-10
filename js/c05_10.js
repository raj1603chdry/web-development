/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-09-01T11:51:47+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c05_10.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-09-01T12:01:41+05:30
 * @Copyright: Raj Choudhary
 */


var firstItem = document.getElementById('one');
var content = firstItem.innerHTML;
firstItem.innerHTML = '<a href=\"www.google.com\"' + content + '</a>';
