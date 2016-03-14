$(function() {

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu',
    method: "GET",
    success: function(data) {
      var menu = data.menu;

      menu.forEach(function(item) {
        var names = item.name;
        var price = item.price;
        $('#container').append('<p>' + names + ' $' + price + '</p>');
      });

    }
  });

});
