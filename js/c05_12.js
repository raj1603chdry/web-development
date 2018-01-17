// storing the element to be removed in a variable
var remove = document.getElementsByTagName('li')[3];

// storing the parent of the element to be removed in a variable
var parent = remove.parentNode;

// removing the element from the DOM tree
parent.removeChild(remove);
