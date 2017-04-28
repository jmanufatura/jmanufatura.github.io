var prazo = 2;

$( function() {

  var ano;
  var mes;
  var dias_mes = [];
  var agora = new Date();
  var hoje = agora.getDate();
  var mes_atual = agora.getMonth();
  var ano_atual = agora.getFullYear();
  var x = diasmesAtual();
  
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

    
    var dia = 0;
    var calendario = false;
    conteudo.empty();

    var dias_mes = diasMes();

    var dias_restantes = dias_mes.length - hoje - prazo;
    
    while( !calendario ) {
      if ( dias[dia] == dias_mes[0].weekday ) {
        calendario = true
      } else {
        conteudo.append('<div class="dia vazio"><span></span></div>');
        dia++
      }
    }
    
    for ( var i = 0; i < 42-dia; i++ ) {

      if ( i >= dias_mes.length ) {
        conteudo.append('<div class="dia vazio"><span></span></div>')
      } 

      else {
        var v = dias_mes[i].day;

        if ( ano < ano_atual ) {
          var m = '<div class="dia passado"><span>';
        } else if ( ano > ano_atual ) {
          var m = '<div class="dia"><span>';
        } else {
          if ( mes < mes_atual + 1) {
            var m = '<div class="dia passado"><span>';
          } else if ( mes > mes_atual + 1) {
            var m = '<div class="dia"><span>';
          } else {
            if ( v < hoje + prazo ) {
              if ( v == hoje ) {
                var m = '<div class="dia hoje "><span>';
              } else {
                var m = '<div class="dia passado "><span>';
              }
            } else if ( v > hoje + prazo ) {
              var m = '<div class="dia"><span>';
            }
          }
        }
        conteudo.append( m + "" + v + "</span></div>" )
      }
    }

    if (dias_restantes > 0 ) {
      header.find( "h6" ).text( meses[mes-1] + ", " + ano );
    } else {
      header.find( "h6" ).text( meses[mes] + ", " + ano );
    }
    
  }

  function diasmesAtual() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  }
  
  function diasMes() {
    
    var dias_mes = [];
    
    for ( var i = 1; i < v(ano,mes) + 1; i++ ) {
      dias_mes.push( { day : i, weekday : dias[ m ( ano, mes, i ) ] } )
    }
    
    return dias_mes
    
  }
  
  function construirSemana() {
    semana.empty();
    for ( var i = 0; i < 7; i++ ) { 
      semana.append( "<div>" + dias[i].substring(0,3) + "</div>" )
    }
  }
  
  function v(dias_mes,ano) {
    return( new Date(dias_mes,ano,0) ).getDate()
  }
  
  function m( dias_mes, ano, mes) {
    return(new Date( dias_mes, ano-1, mes)).getDay()
  }
  
  function g(dias_mes) {
    return y(new Date) == y(dias_mes)
  }
  
  function y(dias_mes) {
    return dias_mes.getFullYear() + "/" + ( dias_mes.getMonth() + 1 ) + "/" + dias_mes.getDate();
  }
  
  function b() {
    var dias_mes = new Date;
    ano = dias_mes.getFullYear();
    mes = dias_mes.getMonth() + 1
  }
  
  b();
  construirCalendario();
  if ( x - hoje - prazo < 1 ) {
    console.log('eita');
    mes++;
    if (mes > 12) {
      mes = 1;
      ano++;
    }
    construirCalendario();
  }
  
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