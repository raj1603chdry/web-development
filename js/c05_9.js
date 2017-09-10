/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-09-01T10:54:52+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c05_9.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-09-01T11:26:53+05:30
 * @Copyright: Raj Choudhary
 */


// finding first list item
var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;  //  accessing value using textContent
var showInnerText = firstItem.innerText;  //  accessing value using innerText

// making output result
var msg = '<p>textContent :' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;

// updating value of firstItem
firstItem.textContent = 'sourdough bread';
