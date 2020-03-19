## Principais conceitos fundamentais para se tornar um DEV !

### VARIÁVEIS E OPERAÇÕES

Muito bem, já sabemos o que é um algoritimo, que o algoritimo recebe dados, transforma dados e exibe dados.

O que é uma variavel então ? Como armazenamos esse dado de entrada pra utilização...

Bom, o computador trabalha com a memória RAM, que nós podemos chegar e falar "ei computador, preciso de um pouco de espaço de memória pra poder armazenar o quq eprecisamos..."

Seguindo nosso exemplo da receita da nossa vó, a vasilha faria o papel da nossa variável, armazenando os ovos, farinha, açucar e etc.... reservamos um espaço na vasilha para resverar nossos produtos úteis...

#### ou seja

Utilizamos a memória para armazenar informações importantes que vamos utilizar em algum lugar para alguma operação.

#### E o que fazer com as varáveis?

        -> Armazernar informação
                A = 2

        -> Cálculos aritméticos (levando em conta uma informação armazenada previamente)
                C = A + 2

        -> Operações relacionais ( levando em conta o valor armazenado)
                C > A

        -> Ler dados do usuário
                LEIA(A)

        -> Escrever seu valor na tela
                ESCREVA(A)

Ou seja, as operações que podemos fazer para as variáveis podem ser tanto aritméticas, relacionais, comparação, atribuição, leitura de teclado ou impressão na tela.


#### Operações Aritméticas
        + - * / %

#### Operações Relacionais
        > >= < <= == !=
    
#### Operações Lógicas
        AND(&&) OR(||) NOT(!)

#### Vamos entender mais sobre sequencia de comandos:

        -> Nunca se esqueça: Todo programa executa linha após linha.
        -> Tipo um manual de instruções ou um roteiro. Instrução após intrução.
        -> Não é possível conseguir calcular uma média entre 2 notas sem antes saber quas são as notas.
        -> Antes de qualquer coisa, pensem em programar, explicando para seu computador o que ele deve fazer e em qual ordem.


Nosso primeiro exemplo de como calcular a média entre dois valores, lembrando que vamos utilizar uma linguagem conceitual para demonstrar nosso raciocínio de como a máquina vai se organizar apra executar o que precisamos, depois transcrevemos para uma linguagem que utilizaremos:

#### Passo a passo

        -> Primeiro vamos assumir que todo programa tem um inicio e um fim, logo colocamos primeiro o bloco do programa, e entre o inicio e fim vamos colocar todas as nossas instruções sobre o que o programa deve fazer, ou interagir com o usuário.
        
        -> Como vamos ter que saber qual a nota 1 e qual a nota 2, ja temos dois elementos que devemos pedir para o usuário digitar, logo ja temos 2 variáveis mais a variável que irá armazenar o resultado da nossa média.

        -> Primeiro declaramos os nomes das nossas variaveis e em seguida pedimos para que seja lido o valor de NOTA1 e NOTA2 que foi digitado pelo usuario, após esses valores serem definidos ja podemos fazer o calculo necessário para a média com as variaveis que nós ja criamos.

        -> E por fim escrevemos na tela um texto para deixar mais bonito nossa saída e depois o valor da média que calculamos.

#### Exemplo do nosso programa

        INICIO
            DECLARE NOTA1, NOTA2, MEDIA
            
            LEIA(NOTA1)
            LEIA(NOTA2)
            
            MEDIA = (NOTA1 + NOTA2) / 2 

            ESCREVA("A MEDIA FINAL VALE")
            ESCREVA(MEDIA)

        FIM

    
