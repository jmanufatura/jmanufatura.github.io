var prazo = 2;

$( function() {

  var agora = new Date();
  var hoje = agora.getDate();
  var mes_atual = agora.getMonth();
  var ano_atual = agora.getFullYear();
  var dias_mes_atual = diasmesAtual();

  // defaults:

  var dia = agora.getDate();
  var ano = agora.getFullYear();
  var mes = agora.getMonth();
  var dias_mes = dias_mes_atual;

  if ( hoje + prazo >= dias_mes.length ){
    var data_selecionada = 'dia_' + (prazo - (dias_mes.length - hoje) + 1) + '_' + (mes_atual + 2) + '_' + ano;
    var dia_selecionado = (prazo - (dias_mes.length - hoje) + 1);
    mes = mes + 2;
  } else {
    var data_selecionada = 'dia_' + (hoje + prazo + 1) + '_' + (mes_atual + 1) + '_' + ano;
    var dia_selecionado = hoje + prazo + 1;
  }
  
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
    
    var dia_semana = 0;
    var calendario = false;

    var dias_mes = diasMes();

    conteudo.empty();

    var dias_restantes = dias_mes.length - dia - prazo;
    
    while( !calendario ) {
      if ( dias[dia_semana] == dias_mes[0].weekday ) {
        calendario = true
      } else {
        conteudo.append('<div class="vazio"><span></span></div>');
        dia_semana++
      }
    }
    
    for ( var i = 0; i < 42 - dia_semana; i++ ) {

      if ( i >= dias_mes.length ) {
        conteudo.append('<div class="vazio"><span></span></div>')
      } 

      else {
        var v = dias_mes[i].day;

        if ( ano < ano_atual ) {
          var m = '<div class="dia indisponivel" id="';
        } else if ( ano > ano_atual ) {
          var m = '<div class="dia" id="';
        } else {
          if ( hoje + prazo >= dias_mes_atual.length && mes <= (mes_atual + 2) && v <= (prazo - (dias_mes_atual.length - hoje))) {
            var m = '<div class="dia indisponivel" id="';
          } else {
            if ( mes < mes_atual + 1) {
              var m = '<div class="dia indisponivel" id="';
            } else if ( mes > mes_atual + 1) {
              var m = '<div class="dia" id="';
            } else {
              if ( v < dia + prazo + 1 ) {
                if ( v == hoje ) {
                  var m = '<div class="dia hoje indisponivel" id="';
                } else {
                  var m = '<div class="dia indisponivel " id="';
                }
              } else if ( v > dia + prazo ) {
                var m = '<div class="dia" id="';
              }
            }
          }
        }
        conteudo.append( m + "dia" + "_" + v + "_" + mes + "_" + ano + '"><span>' + v + '</span></div>' )
      }
    }

    header.find( "h6" ).text( meses[mes-1] + ", " + ano );

    $('#' + data_selecionada).addClass('selecionado');

     $('#data_entrega').val(dia_selecionado + '.' + mes + '.' + ano );

    $('#calendario_conteudo .dia:not(.indisponivel)').on("click",function() {

      data_selecionada = $(this).attr('id');
      dia_selecionado = $('span', this).html();

      $('#data_entrega').val(dia_selecionado + '.' + mes + '.' + ano );
      $('#escolher_data').removeClass('aberto');
      $('body').removeClass('fixo');

      $('#calendario_conteudo .dia').removeClass('selecionado');
      $(this).addClass('selecionado');

    });
    
  }

  function diasmesAtual() {
    var dias_mes_atual = [];
    for ( var i = 1; i < v(ano_atual,mes_atual); i++ ) {
      dias_mes_atual.push( { day : i } )
    }
    return dias_mes_atual;
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

  var dias_mes = new Date;
  ano = dias_mes.getFullYear();
  mes = dias_mes.getMonth() + 1;

  if ( hoje + prazo >= dias_mes_atual.length ){
    console.log('sem mais entregas esse mês.');
    mes++;
    if (mes > 12) {
      mes = 1;
      ano++;
    }
    construirCalendario();
  } else {
    construirCalendario();
  }
  
  header.find('#mes_anterior').on("click",function() {
    mes--;
    if (mes < 1) {
      mes = 12;
      ano--;
    }
    construirCalendario();
    return false;
  });

  header.find('#mes_proximo').on("click",function() {
    mes++;
    if (mes > 12) {
      mes = 1;
      ano++;
    }
    construirCalendario();
    return false;
  });
  
})