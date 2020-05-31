### Javascript: Introdução

### Porque javascript?
        -> Linguagem de web, tudo passa por ela hoje em dia !
        -> JavaScript é uma linguagem de script ou de programação que permite implementar recursos complexos em páginas da Web - toda vez que uma página da Web faz mais do que ficar sentada e exibir informações estáticas para você olhar - exibindo atualizações oportunas de conteúdo, mapas interativos, 2D / 3D animado Gráficos 3D, rolagem de jukeboxes de vídeo etc. - você pode apostar que o JavaScript provavelmente está envolvido.

### Utilizando o console

        -> Dar f12 no browser e ir para aba console.
        -> Executar comandos js.

### console.log
        -> Mostrar saídas...
        #var todos = "valores armazenados"
        #undefined
        #console.log("a frase armazenada é" + todos)
        #>a frase armazenada évalores armazenados
        #undefined

### prompt()

        -> Aguarda input de algo.
        #var entrade = prompt("INSIRA UM VALOR")
        #undefined
        #console.log(entrade)
        #10

### Boas Práticas

        -> camelCase nos nomes das variaveis.
        -> Todas as variáveis devem começar com uma letra
        -> Sempre colocar espaço entre os operadores e depois da virgula.
        -> Para indentação usar sempre dois espaços.
        -> Sempre terminar uma instrução simples com o ponto e vírgula.
        -> Sempre colocar abertura de chave na mesma linha da função ou de um objeto.
                - Use um espaço entre a declaração da função e o "abertura de chave".
                - Coloque a "chave" da função em uma nova linha isolada.
        -> Cada linha de código não deve ultrapassar 80 caracteres.
        -> Sempre utilize arquivos externos para a sua página HTML invocar JavaScript.
        -> Nomes de arquivos devem sempre começar com letras minúsculas.


### Condicionais

        -> Uma estrutura condicional significa que eu tenho que tomar uma decisão a partir d euma pergunta ou situação que foi imposa a mim.
        #-> var nome = "JC"

        #if (nome === "JC") {
        #console.log("Legal! Seu nome é este mesmo.");
        #}

        ->> Quando eu uso apenas 1 sinal de IGUAL significa que estamos falando de atribuição.
        ->> Quando eu uso 3 sinais de igual ára igualdade.
        
        -> Lógica inicial:
                var nome = "LUCAS"
                 if (nome === "JC") {
                        console.log("Legal! Seu nome é este mesmo.");
                } else if (nome === "LUCAS"){
                        console.log("Olá, tudo bem voce serve !")
                } else {
                        console.log("Que pena ! Seu nome não é JC.")
                }

        -> Lógica pós alteração:
        
                var nome = "JC"

                switch (nome) {
                case 'JC':
                        console.log('Legal! Você é o JC mesmo !');
                        break;
                case 'Lucas':
                        console.log('Ah ! Você também serve !');
                        break;
                default:
                        console.log('Que pena ! Você não é quem eu estou procurando =(');
                        break;
                }


