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

});
