$('#register').on('submit', function(e) {
  e.preventDefault();
  var details = $('#register').serialize();
  $.post('../php/register.php', details, function(data) {
    $('#register').html(data);
  });
});
