$(function() {
  $('li').each(function() {
    var id = this.id;
    $(this).append('  <span class="order">' + id + '</span>');
  });
});
