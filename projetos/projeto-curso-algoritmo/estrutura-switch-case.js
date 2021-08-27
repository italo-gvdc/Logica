function acaoBotao(params) {
	valor01 = prompt ("Digite o primeiro valor: ")
operacao = prompt("Digite a operação: Ex: + , - , * , / ")
valor02 = prompt ("Digite o segundo valor: ")

switch (operacao) {
	case "+":	
	resultado = parseint(valor01) + parseint(valor02)
	     break
	case "-":	
	resultado = parseint(valor01) - parseint(valor02)
	     break 
	case "*":	
	resultado = parseint(valor01) * parseint(valor02)
	     break
	case "/":	
	resultado = parseint(valor01) / parseint(valor02)
	     break            
}


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