// getting the first element
var firstElement = document.getElementById('one');

// checking if the element has class attribute
if(firstElement.hasAttribute('class')) {
  var attr = firstElement.getAttribute('class');

  // adding content after the list
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>The first element has class name: ' + attr + '</p>';
}
