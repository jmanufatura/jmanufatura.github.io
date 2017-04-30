$(document).ready(function(){

	$('#data_entrega').click(function(){
		$('#escolher_data').toggleClass('aberto');
		$('body').toggleClass('fixo');
	});

	$('#horario-entrega').click(function(){
		$('#horario-entrega .dropdown').toggleClass('aberto');
	});

	$('#opcoes-entrega .local').click(function(){
		$('#opcoes-entrega .local').removeClass('selecionado');
		$(this).addClass('selecionado');
	});

	$('#receber-em-casa .selecionar').click(function(){
		$('#receber-em-casa').addClass('aberto');
		$('#buscar').removeClass('aberto');
	});

	$('#buscar .selecionar').click(function(){
		buscarnaFabrica();
	});


	$('#adicionar-endereco .fundo').click(function(){
		$('#adicionar-endereco').removeClass('aberto');
		$('body').removeClass('fixo');
	});

	$('#cep-invalido .fundo').click(function(){
		$('#cep-invalido').removeClass('aberto');
		$('body').removeClass('fixo');
	});

	$('#escolher_data .fundo').click(function(){
		$('#escolher_data').removeClass('aberto');
		$('body').removeClass('fixo');
	});

	$('#adicionar-endereco .fechar').click(function(){
		$('#adicionar-endereco').toggleClass('aberto');
		$('body').toggleClass('fixo');
	});

});

$('#validar-cep').on('click', function () {
    validarCep();
});

function validarCep() {
	var x = $('#cep_novo').val();
    console.log(x);
	if ( (x >= 70000000 && x <= 72799999) || (x >= 73000000 && x <= 73699999) ) {
		$("#cep-popup").val(x);
		$('#adicionar-endereco').toggleClass('aberto');
		$('body').toggleClass('fixo');
		return false;
	} else {
	    $('#cep-invalido').addClass('aberto');
	    return false;
	}
}

$('#novo-local').on('submit', function () {
	$('#adicionar-endereco').toggleClass('aberto');
	$('body').toggleClass('fixo');
	return false;
});

function buscarnaFabrica() {
 	$('#buscar').addClass('aberto');
	$('#receber-em-casa').removeClass('aberto');
	$('#cep-invalido').removeClass('aberto');
	$('body').removeClass('fixo');
 	return false;
}