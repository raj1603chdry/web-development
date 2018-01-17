// declaring function
function getTarget(e) {
  if(!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

// declaring function
function itemDone(e) {
  var target, elParent, elGrandparent;
  target = getTarget(e);
  elParent = target.parentNode;
  elGrandparent = target.parentNode.parentNode;

  elGrandparent.removeChild(elParent);

  // preventing the link from redirecting
  if(e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

// adding event listeners
var el = document.getElementById('shoppingList');
if(el.addEventListener) {
  el.addEventListener('click', function(e) {
    itemDone(e);
  }, false);
} else {
    el.attachEvent('click', function(e) {
    itemDone(e);
  });
}
