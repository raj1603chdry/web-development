// declaring variables
var elList, addLink, newEl, newText, counter, listItems;

// storing elements
elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

// declaring functions
function addItem(e) {
  e.preventDefault();
  newEl = document.createElement('li');
  var text = prompt('Enter the new list item');
  newText = document.createTextNode(text);
  newEl.appendChild(newText);
  elList.appendChild(newEl);
}

function updateCount() {
  listItems = document.getElementsByTagName('li').length;
  counter.innerHTML = listItems;
}

// declaring event listeners
addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);
