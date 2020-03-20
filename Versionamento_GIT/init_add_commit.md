## Principais conceitos fundamentais para se tornar um DEV !

### VERSIONAMENTO

#### Instalação do GIT em seu computador
        -> acesse https://git-scm.com/donwload
        -> Faça o donwload para seu sitema operacional ou siga as outras instruções

#### INIT
        -> Selecione o diretório que deseja inciar o versionamento atravé sod terminal
        -> Execute: git init
    
#### ADD e STAGING
        -> Crie um arquivo chamado index.html no mesmo diretório
        -> Executo git add index.html
        -> Para mandar o git olhar para todos os arquivos que voce alterou é só digitar:
        -> git add .

#### COMMIT
        -> Commit gera um ponto na linha do tempo apra o nosso arquivo
        -> Execute: git commit -m "Adicinao arquivo index.html do nosso site"

#### LOG
        -> Vamos verificar os pontos da linha do tempo, mostrando o autor, data e msg do commit.
        -> Execute: git log

#### STATUS
        -> Vamos alterar nosso arquivo index.html
        -> Abra ele e adicione:
        <html>
            <body>
                <h1> Minha pagina html</h1>
            </body>
        </html>
        -> Agora vamos verificar o status do nosso pojeto atual
        -> Execute: git status
