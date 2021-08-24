
   
   se operacao = "+" entao
      resultado := valor01 + valor02
   senao
       se operacao = "-" entao
         resultado := valor01 - valor02
       senao
          se operacao = "*" entao
            resultado := valor01 * valor02
          senao
            se operacao = "/" entao
              resultado := valor01 / valor02
             fimse
           fimse
       fimse
   fimse
   escreva ("Resultado do calculo é: ", resultado)


var valor01, valor02, resultado, operacao

function acaoBotao(params) {
	valor01 = prompt ("Digite o primeiro valor: ")
operacao = prompt("Digite a operação: Ex: + , - , * , / ")
valor02 = prompt ("Digite o segundo valor: ")

if ( operacao == "+" ) {
	resultado = parseint(valor01) + parseint(valor02)
}else if() (se operacao == "-"){
	resultado = parseint(valor01) - parseint(valor02)
}else if() (se operacao == "*"){
	resultado = parseint(valor01) * parseint(valor02)
}else if() (se operacao == "/"){
	resultado = parseint(valor01) / parseint(valor02)
}
  
document.getElementByid("paragrafo").innertext = resultado

}