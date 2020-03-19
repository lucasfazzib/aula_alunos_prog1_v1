## Principais conceitos fundamentais para se tornar um DEV !

### REPETIÇÕES

#### Vamos começar esse temo com o seguinte contexto:
        -> Precisamos mostrar uma tabuada de um número qualquer ex: tabuada do 5
        -> 5x0 = 0
        -> 5x1 = 1
        -> 5x2 = 10
        -> 5x3 = 15
        ...
        -> 5x10 = 50

#### Como realizaríamos esse programa ? 
        
        -> Primeiro temos o primeiro número que vai ser constantem o nosso multiplicador, nosso numero que varia de 0 a 10 e o resultado.
        
        -> A principal sacada é conseguir sempre adicionar +1 no nosso segundo numero e continue seguindo em frente com a execução e os passos.
        
        -> Na imagem abaixo representamos um laço de repetição que não passa de inumeros testes e depois repetição conforme a condição continue sendo válida.

        -> É mais fácil mostrar como ficaria essa tabuada em nossa linguagem conceitual, acredito que vocês vão entender melhor.


#### Exemplo do nosso programa COM REPETICAO
        INICIO
            DECLARE TAB, NUMERO, RESULTADO

            LEIA(TAB)
            NUMERO = 0

            ENQUANTO(NUMERO <= 10) FAÇA
                RESULTADO = NUMERO * TAB
                ESCREVA(RESULTADO)
                NUMERO = NUMERO + 1
            FIM-ENQUANTO
        FIM













