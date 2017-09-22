$(function () {
  var $list, $newItemForm, $newItemButton;
  var item = '';
  $list = $('ul');
  $newItemButton = $('#newItemButton');
  $newItemForm = $('#newItemForm');

  $('li').hide().each(function (index) {
    $(this).delay(index * 450).fadeIn(1600);
  });

  // item counter function
  function updateCount () {
    var items = $('li[class!=complete]').length;
    $('#counter').text(items);
  }
  updateCount();

  // setup form for new items
  $newItemButton.show();
  $newItemForm.hide();
  $newItemButton.on('click', function () {
    $newItemButton.hide();
    $newItemForm.show();
    $('input:text').focus();
  });

  // adding entered item to the end of the list
  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<li>' + text + '</li>');
    $('input:text').val('');
    updateCount();
  });

  // event delegation for marking items as complete and deleting them from the list
  $list.on('click', 'li', function () {
    var $this = $(this);
    var complete = $this.hasClass('complete');

    if(complete === true) {
      $this.animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function () {
        $this.remove();
      });
    } else {
      item = $this.text();
      $this.remove();
      $list
        .append('<li class="complete">' + item + '</li>')
        .hide()
        .fadeIn(300);
        updateCount();
    }
  });
});
