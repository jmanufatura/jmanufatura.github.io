$( function() {
  
  var e = 480;
  
  var t = 2016;
  
  var n = 1;
  
  var r = [];
  
  var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"];
  
  var dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"];
  
  var calendario = $( "#calendario" );
  
  var header = calendario.find( "#calendario_header" );
  
  var semana = calendario.find( "#calendario_semana" );
  
  var conteudo = calendario.find( "#calendario_conteudo" );
  
  function c() {
    
    construirSemana();
    var e = h();
    var r = 0;
    var calendario = false;
    conteudo.empty();
    
    while( !calendario ) {
      if ( dias[r] == e[0].weekday ) {
        calendario = true
      } else {
        conteudo.append('<div class="dia vazio"><span></span></div>');
        r++
      }
    }
    
    for ( var c = 0; c < 42-r; c++ ) {
      if ( c >= e.length ) {
        conteudo.append('<div class="dia vazio"><span></span></div>')
      } else {
        var v = e[c].day;
        if ( g ( new Date ( t, n-1, v) ) ) {
          var m = '<div class="dia hoje"><span>';
        } else { 
          var m = '<div class="dia"><span>';
        }
        conteudo.append( m + "" + v + "</span></div>" )
        var hoje = new Date().getDate();
      }
    }
    
    header.find( "h6" ).text( meses[n-1] + ", " + t );
    
  }
  
  function h() {
    
    var e = [];
    
    for ( var r = 1; r < v(t,n) + 1; r++ ) {
      e.push( { day : r, weekday : dias[ m ( t, n, r ) ] } )
    }
    
    return e
    
  }
  
  function construirSemana() {
    semana.empty();
    for ( var e = 0; e < 7; e++ ) { 
      semana.append( "<div>" + dias[e].substring(0,3) + "</div>" )
    }
  }
  
  function v(e,t) {
    return( new Date(e,t,0) ).getDate()
  }
  
  function m( e, t, n) {
    return(new Date( e, t-1, n)).getDay()
  }
  
  function g(e) {
    return y(new Date) == y(e)
  }
  
  function y(e) {
    return e
      .getFullYear() + "/" + ( e.getMonth() + 1 ) + "/" + e.getDate()
  }
  
  function b() {
    var e = new Date;
    t = e.getFullYear();
    n = e.getMonth() + 1
  }
  
  b();
  
  c();
  
  header.find('#mes-anterior').on("click",function() {
    n--;
    if (n < 1) {
      n = 12;
      t--;
    }
    c();
    return false;
  });

  header.find('#mes-proximo').on("click",function() {
    n++;
    if (n > 12) {
      n = 1;
      t++;
    }
    c();
    return false;
  });
  
})