var $videos = $("iframe[src^='https://player.vimeo.com'], iframe[src^='https://www.youtube.com']"),

    $fluidEl = $("#capa-home");

$videos.each(function() {

  $(this)
    .data('proporcao', this.height / this.width)

    .removeAttr('height')
    .removeAttr('width');

});

$(window).resize(function() {

  var novaLargura = $fluidEl.width();

  $videos.each(function() {

    var $el = $(this);

    $el
      .width(novaLargura)
      .height(novaLargura * $el.data('proporcao'));

  });

}).resize();

var iframe = document.querySelector('#video-home');
var player = new Vimeo.Player(iframe);

$("#overlay-capa-home").click() 

player.on('play', function() {
  $("#controle-video").click(function() {
      player.pause();
  });
  $("#overlay-capa-home").click(function() {
      player.pause();
  });
  $("#overlay-capa-home")
    .removeClass('pausado')
    .addClass('reproduzindo')
  ;
});

player.on('pause', function() {
  $("#controle-video").click(function() {
      player.play();
  });
  $("#overlay-capa-home").click(function() {
      player.play();
  });
  $("#overlay-capa-home")
    .removeClass('reproduzindo')
    .addClass('pausado')
  ;
});

player.on('loaded', function() {
  $("#controle-video").click(function() {
      player.play();
  });
  $("#overlay-capa-home").click(function() {
      player.play();
  });
});