$(document).ready(function(){

	$('#data-entrega .valor').click(function(){
		$('#escolher-data').toggleClass('aberto');
		$('body').toggleClass('fixo');
	});

	$('#opcoes-entrega .local').click(function(){
		$('#opcoes-entrega .local').removeClass('selecionado');
		$(this).addClass('selecionado');
	});

	$('#receber-em-casa .checkbox').click(function(){
		$('#receber-em-casa').toggleClass('aberto');
	});

	$('#adicionar-endereco .fundo').click(function(){
		$('#adicionar-endereco').toggleClass('aberto');
		$('body').toggleClass('fixo');
	});

	$('#cep-invalido .fundo').click(function(){
		$('#cep-invalido').toggleClass('aberto');
		$('body').toggleClass('fixo');
	});

	$('#escolher-data .fundo').click(function(){
		$('#escolher-data').toggleClass('aberto');
		$('body').toggleClass('fixo');
	});

	$('#adicionar-endereco .fechar').click(function(){
		$('#adicionar-endereco').toggleClass('aberto');
		$('body').toggleClass('fixo');
	});

});

$('#validar-cep').on('submit', function () {
    var x = document.forms["validarCep"]["cepNovo"].value;
	if ( (x >= 70000000 && x <= 72799999) || (x >= 73000000 && x <= 73699999) ) {
		console.log(x);
		$("#cep-popup").val(x);
		$('#adicionar-endereco').toggleClass('aberto');
		$('body').toggleClass('fixo');
		return false;
	} else {
	    $('#cep-invalido').addClass('aberto');
	    return false;
	}
});

$('#novo-local').on('submit', function () {
	$('#adicionar-endereco').toggleClass('aberto');
	$('body').toggleClass('fixo');
	return false;
});

function buscarnaFabrica() {
 	$('#adicionar-endereco').toggleClass('aberto');
	$('body').toggleClass('fixo');
	$('#adicionar-endereco').removeClass('cep-invalido');
 	return false;
}