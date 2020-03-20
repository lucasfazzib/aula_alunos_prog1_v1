## Principais conceitos fundamentais para se tornar um DEV !

### DECISÕES

        Um outro conceito que a gente precisa entender, é o conceito de decisão, a gente sbae que as instruções são executadas uma atras da outra, porem nós podemos dar a maquina a possibilidade de executar um determinado conjunto de instruções OU um outro determinado conjunto. 

        Imagine o caso: Como vocÊ vai fazer um bolo sem ovos ? Não vai ter como não é....logo você não faz nada.

        Em muitos casos, é necessário que seu programada tome uma decisão antes de fazer uma determinada instrução ( ou conjunto de intruções)

        E o resultado desse teste, tem que ser SIM ou NÃO, V ou F, TRUE ou FALSE, nós chamamos isso de booleanos.

        Antes de iniciar qualquer procedimento para fazre o bolo, temos que perguntar TEMOS TODOS OS INGREDIENTES? Caso negativo, apenas sairíamos do fluxo do programa e enviamos uma saida diferente informando um erro para o usuario, caso a resposta seja positiva, seguimos o fluxo normal.

#### Exemplo do nosso programa COM UM CONDIÇÃO DE EXEMPLO

        INICIO
            DECLARE NOTA1, NOTA2, MEDIA
            
            LEIA(NOTA1)
            LEIA(NOTA2)
            
            MEDIA = (NOTA1 + NOTA2) / 2 

            ESCREVA("A MEDIA FINAL VALE")
            ESCREVA(MEDIA)

            SE MEDIA>=6 ENTAO
                ESCREVA("PARABENS VOCE FOI APROVADO")
            FIM-SE

        FIM


#### Abaixo temos um exemplo de condições no nosso antigo algoritimo de receita:


![Decisao](https://github.com/lucasfazzib/aula_alunos_prog1_v1/blob/master/imagens/condicao.PNG)
