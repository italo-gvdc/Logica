Algoritmo "Estruturas de controle"
// Disciplina   : Estruturas de controle
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome: Italo Gabriel Vieira Da Cruz
// Data atual  : 20/08/2021
Var
// Seção de Declarações das variáveis 
   Nota1, Nota2, Media: real
   Nome: caracter

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
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