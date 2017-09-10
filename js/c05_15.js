// getting the first element and removing it's class attribute
var firstItem = document.getElementById('one');
if(firstItem.hasAttribute('class')) {
  firstItem.removeAttribute('class');
}
