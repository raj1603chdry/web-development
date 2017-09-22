$(function () {
  var $p = $('p');
  var $clone = $p.clone();
  $p.remove();
  $clone.insertAfter('h2');

  var $moveItem = $('#one').detach();
  $moveItem.appendTo('ul');
});
