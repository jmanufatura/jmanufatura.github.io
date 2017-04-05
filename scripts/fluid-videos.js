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