$(document).ready(function(){
  $('#icone-menu').click(function(){
    $('#menu-phone').toggleClass('aberto');
    $('#menu').toggleClass('aberto');
    $('body').toggleClass('fixo');
  });
});