console.log('And we\'re off!');

var $form, width, height, area;

$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
  console.log('You entered ', this.value);
});

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = $('#width').val();
  height = $('#height').val();

  console.log('Width ', width);
  console.log('Height ', height);

  area = width * height;
  console.log('Area ', area);

  $form.append('<p>Area ' + area + '</p>');
});
