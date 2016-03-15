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
    addToOrder = addToOrder.split("$")[0];
    var price = $('.active').data('price');
    $('#food').append('<div>' + addToOrder + ' x ' + quantity + ' <span>' + price + '</span></div>');
    $('#items').append(addToOrder + ' x ' + quantity + ', ');


    var itemPrice = price * quantity;
    subtotal = subtotal + itemPrice;
    $('#subtotal').html('$' + subtotal.toFixed(2));
    var tax = 0.083 * subtotal;
    $('#tax').html('$' + tax.toFixed(2));
    var total = tax + subtotal;
    $('#total').html('$' + total.toFixed(2));
  });

});
