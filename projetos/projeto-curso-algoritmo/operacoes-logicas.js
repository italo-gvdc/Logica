   /*
   passou := falso
   escreval("Digite o nome do aluno aqui: ")
   leia(nome)
   escreval("Digite a nota 01 do aluno: ")
   leia(nota01)
   escreval("Digite a nota 02 do aluno")
   leia(nota02)
   media:= (nota01 + nota02) / 2
   
   se media >= 5 entao
      passou:=verdadeiro
   fimse
   
   se (passou) && ( media >=50 || media <=70) entao
   escreval ("Aprovado!",  nome)
   senao
   escreval("Reprovado!", nome)
   fimse 
   */

   var nome, nota01, nota02, passou;

   passou = false;
   nome = prompt("Digite o nome do aluno:")
   Nota01 = prompt("Digite nota 01 do aluno:")
   Nota02("Digite a nota 02 do aluno:")

   media = ( parseint(nota01) + = (parseint (nota02 )) / 2

    if (media >= 50)
        passou = true;

   if (passou && media >= 70 && media <= 90))
        alert("Aprovado!" + nome)
   
    else
        alert("Reprovado!" + nome)