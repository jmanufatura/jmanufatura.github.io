$(document).ready(function(){
	$('#novo-local .botao').click(function(){
		$('#adicionar-endereco').toggleClass('aberto');
		$('body').toggleClass('fixo');
	});
	$('#adicionar-endereco .fundo').click(function(){
		$('#adicionar-endereco').toggleClass('aberto');
		$('body').toggleClass('fixo');
		$('#adicionar-endereco').removeClass('cep-invalido');
	});
	$('#adicionar-endereco .fechar').click(function(){
		$('#adicionar-endereco').toggleClass('aberto');
		$('body').toggleClass('fixo');
		$('#adicionar-endereco').removeClass('cep-invalido');
	});
	$("#cep").mask("99999-999");
});

function validarCep() {
 	var x = document.forms["novoLocal"]["cep"].value;
	if ( (x >= 70000000 && x <= 72799999) || (x >= 73000000 && x <= 73699999) ) {
		alert("endereço para entrega adicionado");
		$('#adicionar-endereco').toggleClass('aberto');
		$('body').toggleClass('fixo');
		$('#adicionar-endereco').removeClass('cep-invalido');
		return false;
	} else {
	    $('#adicionar-endereco').addClass('cep-invalido');
	    return false;
	}
}

function buscarnaFabrica() {
 	$('#adicionar-endereco').toggleClass('aberto');
	$('body').toggleClass('fixo');
	$('#adicionar-endereco').removeClass('cep-invalido');
 	return false;
}