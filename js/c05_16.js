// adding items to the start and end of the list
var list = document.getElementsByTagName('ul')[0];

// adding item to the end of the list
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// adding item to the beginning of the list
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

// adding class 'cool' to all list item
var listItems = document.querySelectorAll('li');
var i;
for(i = 0; i < listItems.length; i++) {
  listItems[i].className = 'cool';
}

// adding number of items in the list to the heading
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;
