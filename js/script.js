$(document).ready(function() {

  var subtotal = 0;

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
        if (type == 'burger') {
          $('#burger').append('<div data-price="' + price + '">' + name + ' $' + price + '</div>');
        }
        if (type == 'pizza') {
          $('#pizza').append('<div data-price="' + price + '">' + name + ' $' + price + '</div>');
        }
      });
      $('#menu > div div:first').addClass('active');
    });

  $('#menu > div').on('click', 'div', function() {
    $('div').removeClass('active');
    $(this).addClass('active');
  });

  $('#additem').click(function() {

    var quantity = $('#quantity').val();
    if (quantity < 1 || quantity > 99) {
      alert('Please pick a quantity between 1 and 99');
      return false;
    }

    var addToOrder = $('.active').text();
    $('#food').append('<div>' + addToOrder + ' x ' + quantity + '</div>');
    $('#items').append(addToOrder + ' x ' + quantity + ', ');

    var price = $('.active').data('price');
    var itemPrice = price * quantity;
    subtotal = subtotal + itemPrice;
    $('#subtotal').html('$' + subtotal);
  });

});
