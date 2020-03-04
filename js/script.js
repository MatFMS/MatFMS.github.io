'use strict'

$(document).ready(function (){
    // ativar o slick
    $('.slider').slick({
        // setting-name: setting:value
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true
    })
})
$('#telefone').mask('(00) 0000-0000')
$('#celular').mask('(00) 00000-0000')


//  script para o contador de caracteres
var spanMaximo = $('#maximo')
var bcaracteres = $('#caracteres')
var textMensagem = $('#mensagem')

// determinando a qtde de caracteres
var quantidade = 300
textMensagem.on('input' , function(){
//captura em tempo real
// console.log(textMensagem.val())
var conteudo = textMensagem.val()
// criando uma contagem regressiva
var contagem = quantidade-conteudo.length
console.log(contagem)
bcaracteres.text(contagem)

// se acontagem chegar no zero exibir o span em vermelho caso contrario preto
if (contagem == 0) {
    spanMaximo.css('color' , 'red')
} else {
    spanMaximo.css('color' , 'black')
}
})