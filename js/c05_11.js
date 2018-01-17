/**
 * @Author: Raj Choudhary <raj1603chdry>
 * @Date:   2017-09-01T12:02:41+05:30
 * @Email:  raj.choudhary1603@gmail.com
 * @Filename: c05_11.js
 * @Last modified by:   raj1603chdry
 * @Last modified time: 2017-09-02T18:26:55+05:30
 * @Copyright: Raj Choudhary
 */


//  create a new element and store it in a variable
var newEl = document.createElement('li');

//  creating a text node and storing it in a variable
var newText = document.createTextNode('quinoa');

//  attaching the textNode to the created element
newEl.appendChild(newText);

// finding the position to append the new element in the document
var pos = document.getElementsByTagName('ul')[0];

// appending the new element in the document
pos.appendChild(newEl);
