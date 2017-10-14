// generating HTML page using js
var vote = '<div id="vote"><div class="third"><a href="http://example.org?tshirt=gray"><img src="../images/t-gray.png" id="gray" alt="gray" /></a></div><div class="third"><a href="http://example.org?tshirt=yellow" id="yellow"><img src="../images/t-yellow.png" id="yellow" alt="yellow" /></a></div><div class="third"><a href="http://example.org?tshirt=green"><img src="../images/t-green.png" id="green" alt="green" /></a></div></div>';
$('#selector').append(vote);

// adding rating to the side bar
$('#selector a').on('click', function(e) {
  e.preventDefault();
  var queryString = 'vote=' + $(e.target).attr('id');
  $.get('../php/votes.php', queryString, function (data) {
    $('#selector').html(data);
  });
});
