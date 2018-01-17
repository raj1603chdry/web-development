$(function() {
  $('li').on('click', function() {
    $(this).animate({
      opacity: 0,
      paddingLeft: '+=100'
    }, 500, function() {
      $(this).remove();
    });
  });
});
