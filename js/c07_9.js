$(function() {
  $('ul').before('<p class="notice">Just Updated by Raj</p>');
  $('li.hot').prepend('+ ');
  var $newItem = $('<li><em>gluten-free</em> soy sauce</li>');
  $('li:last').after($newItem);
});
