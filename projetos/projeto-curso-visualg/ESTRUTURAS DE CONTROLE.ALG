Algoritmo "Estruturas de controle"
// Disciplina   : Estruturas de controle
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome: Italo Gabriel Vieira Da Cruz
// Data atual  : 20/08/2021
Var
// Se��o de Declara��es das vari�veis 
   Nota1, Nota2, Media: real
   Nome: caracter

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   escreval("Digite o nome do aluno")
    leia (nome)
   escreval("Digite nota 01 do aluno:")
   leia (nota1)
   escreval("Digite a nota 02 do aluno:")
   leia (nota2)
   media := (Nota1 + Nota2) / 2
   
   se media >= 5 entao
   escreval ("Aprovado!", nome)
   senao
   escreval ("Reprovado!", nome)
   fimse
Fimalgoritmo