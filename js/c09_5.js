$(function() {

  $('#arrival').datepicker();

  var $amount = $('#amount');
  var $range = $('#price-range');

  $('#price-range').slider({
    range: true,
    min: 100,
    max: 400,
    values: [150, 350],
    slide: function(event, ui) {
      $amount.val('$' + ui.values[0] + '- $' + ui.values[1]);
    }
  });

  $amount.val('$' + $range.slider('values', 0) + '- $' + $range.slider('values', 1));
});
