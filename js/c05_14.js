// getting the first element and changing it's class attribute
var firstItem = document.getElementById('one');
firstItem.className = 'complete';

// getting the fourth element and adding an attribute
var fourthItem = document.getElementsByTagName('li').item(3);
fourthItem.setAttribute('class', 'cool');
