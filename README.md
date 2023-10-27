# Desafio Frontend Agência Estado

Projeto desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor Front-end Angular da Agência Estado por [Danilo Serpa Martins](https://www.linkedin.com/in/danilo-serpa-639a2173/)

### Apresentação

Desenvolver uma aplicação onde é possível criar baralhos com cartas de pokémons utilizando a API (https://docs.pokemontcg.io)

### Instalação

#### Pré-requisitos

Certifique-se de ter os seguintes componentes instalados em sua máquina:

Node.js e NPM (Node Package Manager)
Angular CLI instalado globalmente (npm install -g @angular/cli).

#### Passos de Instalação

1 - Clone o repositório do projeto para sua máquina:

`git clone https://github.com/danilo-serpa/pokedeck.git`

2 - Navegue até o diretório do projeto:

`cd pokedeck`

3 - Instale as dependências do projeto:

`npm install`


### Uso

#### Executando a Aplicação

Para executar a aplicação, utilize o comando:

`ng serve`

#### Como acessar a página principal?

Deve-se criar um usuário e fazer login para ter acesso ao sistema.

Qualquer outro login não terá permissão para acesso.


### Funcionalidades

#### Tela de Login

Foi desenvolvido a primeira tela que é uma aplicação de autenticação, essa autenticação é realizada consultando o  localStorage do usuário apenas para simular uma autenticação e usando os serviços do guard.

#### Criar/Editar baralho
Ao clicar no botão "Criar baralho", irá redirecionar para a tela de formulário onde é possível cadastrar um nome para o baralho, e selecionar as cartas para este baralho. Em seguida clicando no botão salvar, aparecerá uma notificação dizendo que foi executado com sucesso, ou com erro caso isto aconteça.

#### Excluir baralho
No grid onde lista os baralhos é possível clicar no ícone de exclusão (Lixeira).

#### Ver detalhes do baralho
No grid onde lista os baralhos é possível clicar no ícone de detalhes (Lupa), mostrará as cartas do baralho selecionado, assim como os totalizadores de pokémons, treinadores e cores selecionados.


### Componentes auxiliares

#### Guard
Foi criado um guarda de rota simples para garantir que fosse impossível acessar as páginas sem estar devidamente logado.

#### Toast
Foi criado um  toast para exibir as notificações ao fazer operações de CRUD.

#### Loader
Foi criado um loader para ser exibido ao fazer uma requisição a API.

#### Validation message
Foi criado um componente para formatação e estilizar as mensagens de validação dos forms.

### Services desenvolvidos

#### User
Serviço responsável pela criação e login do usuário.

#### Card e Deck
Serviços responsaveis por recuperar as cartas da API e salvar os baralhos cadastrados pelo usuário.

#### Storage
Serviço utilizado para salvar os dados no localStorage.

#### Toast
Serviço responsável por controlar as notificações exibidas para o usuário.

### Tecnologias

- Angular 16
- Tailwind Css
- Infragistics
