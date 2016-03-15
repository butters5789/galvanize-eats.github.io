$(document).ready(function() {

  $.ajax({
      method: "GET",
      url: 'https://galvanize-eats-api.herokuapp.com/menu'
    })
    .done(function(data) {
      var menu = data.menu;
      menu.forEach(function(item) {
        var name = item.name;
        var price = item.price;
        var type = item.type;
        $('#menu').append('<div>' + name + ' $' + price + '</div>');
      });
      $('#menu div:first').addClass('active');
    });

  $('#menu').on('click', 'div', function() {
    $('div').removeClass('active');
    $(this).addClass('active');
  });

  $('button').click(function() {
    var quantity = $('#quantity').val();
    if (quantity < 1 || quantity > 99) {
      alert('Please pick a quantity between 1 and 99');
      return false;
    }
    var addToOrder = $('.active').text();
    $('#order').append('<div>' + addToOrder + ' x ' + quantity + '</div>');
  });

});
