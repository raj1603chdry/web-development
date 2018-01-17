$(function() {
  var $listItems = $('li');

  $listItems.on('click mouseover', function() {
    var id = this.id;
    // $listItems.children('span').remove();
    $(this).append(' <span class="priority">' + id + '</span>');
  });

  $listItems.on('mouseout', function() {
    $(this).children('span').remove();
  });
});
