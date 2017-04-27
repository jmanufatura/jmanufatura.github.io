$( function() {
  
  var data = [];
  
  var ano;
  
  var mes;
  
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
  
  function construirCalendario() {
    
    construirSemana();

    var data = h();
    var dia = 0;
    var calendario = false;
    conteudo.empty();
    
    while( !calendario ) {
      if ( dias[dia] == data[0].weekday ) {
        calendario = true
      } else {
        conteudo.append('<div class="dia vazio"><span></span></div>');
        dia++
      }
    }

    var hoje = new Date().getDate();
    var mes_atual = new Date().getMonth();
    var ano_atual = new Date().getFullYear();
    console.log(hoje);
    console.log(mes_atual);
    console.log(ano_atual);
    
    for ( var i = 0; i < 42-dia; i++ ) {

      if ( i >= data.length ) {
        conteudo.append('<div class="dia vazio"><span></span></div>')
      } 

      else {
        var v = data[i].day;

        if ( g ( new Date ( ano, mes-1, v) ) ) {
          var m = '<div class="dia hoje"><span>';
        } else {
          if ( ano < ano_atual - 1 ) {
            var m = '<div class="dia passado"><span>';
          } else {
            if ( mes > mes_atual + 1) {
              var m = '<div class="dia"><span>';
            } else {
              if ( mes == mes_atual + 1) {
                if ( v > hoje ) {
                  var m = '<div class="dia"><span>';
                } else {
                  var m = '<div class="dia passado"><span>';
                }
              } else {
                var m = '<div class="dia passado"><span>';
              }
            }
          }
        }
        conteudo.append( m + "" + v + "</span></div>" )
      }
    }
    
    header.find( "h6" ).text( meses[mes-1] + ", " + ano );
    
  }
  
  function h() {
    
    var data = [];
    
    for ( var i = 1; i < v(ano,mes) + 1; i++ ) {
      data.push( { day : i, weekday : dias[ m ( ano, mes, i ) ] } )
    }
    
    return data
    
  }
  
  function construirSemana() {
    semana.empty();
    for ( var i = 0; i < 7; i++ ) { 
      semana.append( "<div>" + dias[i].substring(0,3) + "</div>" )
    }
  }
  
  function v(data,ano) {
    return( new Date(data,ano,0) ).getDate()
  }
  
  function m( data, ano, mes) {
    return(new Date( data, ano-1, mes)).getDay()
  }
  
  function g(data) {
    return y(new Date) == y(data)
  }
  
  function y(data) {
    return data.getFullYear() + "/" + ( data.getMonth() + 1 ) + "/" + data.getDate();
  }
  
  function b() {
    var data = new Date;
    ano = data.getFullYear();
    mes = data.getMonth() + 1
  }
  
  b();
  construirCalendario();
  
  header.find('#mes-anterior').on("click",function() {
    mes--;
    if (mes < 1) {
      mes = 12;
      ano--;
    }
    construirCalendario();
    return false;
  });

  header.find('#mes-proximo').on("click",function() {
    mes++;
    if (mes > 12) {
      mes = 1;
      ano++;
    }
    construirCalendario();
    return false;
  });
  
})