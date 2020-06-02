### Introdução


## Por quê REACT?

        -> Lib para a criação de interfaces
        -> Utilizada para a construção de SPA(Single Page Applications)
        -> Podemos chamar de FRAMEWORK, devido a seu ecossistema:
            -> ReactJS
            -> React Native (mobile)
            -> Redux
            -> Webpack
            -> etc... 
        -> Tudo fica dentro do Javascript  (elementos visuais, lógica e estilo) 
        -> Com uma única linguagem você vai estar preparado para lidar com tudo backend, frontend, mobile... tudo dentro do JavaScript.

        -> VANTAGENS
            -> Organização do código:
                -> Dividir nosso app/código em blocos específicos
                -> O funcionamento de um componente não interfere em outro
                -> Se um componente é removido, o resto continua funcionando.

            -> Divisão de responsabilidades:
                -> Back-End: Regras de negócio
                -> Front-End: Interface

            -> Programação Declarativa>
                -> Dizemos ao código o que queremos, ele se encarrega do resto.
                -> "Eu quero que seja exibido esse dado aqui, de certa forma, nesse lugar"


## Preparando o Ambiente

        -> Node, npm, editor, terminal.

        -> Donwload nodejs
            -> https://nodejs.org/en/
            -> Fazer o download da versao LTS.

        -> npm
            -> Já vem instalado por padrao ao instalar o nodejs

        -> yarn
            -> Rodar no terminal do gitbash
            -> npm install -g yarn

        -> Editor de texto
            -> Visual studio
            -> https://code.visualstudio.com/

        -> Create React APP
            -> Utilizar ja pré configs para criar o app em react, tem muita coisa "chata" para configurar, e é muito mais facil fazer com esse create-react-app do facebook

            -> https://github.com/facebook/create-react-app
            -> https://create-react-app.dev/docs/getting-started/

            -> npx create-react-app nome_do_app
                -> Esse método cria dependencia por dependencia de modo fácil e organizado.

            -> yarn start
                Inicia o servidor de desenvolvimento.

            -> yarn build
                Agrupa o aplicativo em arquivos estáticos para produção.

            -> yarn test
                Inicia o executor de teste.

            -> yarn eject
                Remove esta ferramenta e copia dependências de construção, arquivos de configuração
                e scripts no diretório do aplicativo. Se você fizer isso, não poderá voltar!

            Sugerimos que você comece digitando:

            cd nome_do_seu_app
            npm start

            Começando a mexer nos código
                -> code . ( rode on terminal na pasta do projeto para abrir o src no visual studio.)


## Primeiros passos e conceitos básicos

        -> Componentização:
            -> Dentro do react tudo dentor dele é componente.
            -> Todo componente vai ter:
                -> Um ESTADO interno
                -> PROPRIEDADE
                    -> São como os atributos do HTML (name, id, classname...)
            -> Todo componente recebe um parametro que chama "props", sempre vai ter.
                -> Para resgatar os valroes das propriedades é usado> props.(o que vc precisa)
            -> Fragment
                -> <>
                        Código...
                   </>
                
            -> import React, { useState } from 'react';
            EX:
            
            function App(props) {
            const [ usuario, setUsuario ] = useState('Lucas')
            return (
                <>
                <p> { usuario }</p>
                <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" />
                </>
            );
            }

            export default App;


## Consumindo dados de uma API com axios

        -> Instalando o axios: npm install axios

## Utilizando React Router para criar rotas

        -> https://reacttraining.com/react-router/web
        npm install react-router-dom
        import React from 'react';
        import { Switch, Route, BrowserRouter } from 'react-dom';
        import Repositories from './Repositories';

        import Repositories from './Repositories';


        export default function Router(){
            return (
                <BrowserRouter>
                    <Switch>
                    <Route path='/repositories' component={Repositories} />
                    </Switch>
                </BrowserRouter>
            )
        }

## Boa práticas: organização e estilo

## Entendendo, na prática, o poder da programação declarativa.