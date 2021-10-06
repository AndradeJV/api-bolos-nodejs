# API - Finder Up

- Objetivo: Nosso cliente precisa realizar a gestão de matérias primas para fabricação de Bolos, o software atual vai realizar
chamadas em nossa API.

#

### Requisitos para testes:

- 1º Ter o NodeJs e NPM instalado, as versões utilizadas de cada pacote foi:
  - Node: v14.17.3
  - NPM: v6.14.13
- Essas versões são as quais certifico que o app funcionará.
- Utilizei um banco não relacional, MongoDB
  - v5.0.2
- Para teste deve ser criado um database com o nome "bolos" e uma colection com o nome "materiaprimas"
- Como não houve deploy, os testes serão somente locais.

#
### Inicializando o teste:

- Obs.: Para inicializar o servidor:
  Utilizar os seguintes comandos:
    - Via NPM: "npm start"
    - Via yarn (conforme usado no desenvolvimento): "yarn start"

#
### Formas testadas:

- Todas as formas utilizados foi feita pelo software insomnia
  - Testes realizados: 
    - Get
    - Get :id
    - Post
    - Put

#
### Obs.:
- Caso necessário, incluir framework express e algumas dependências
  - Express: npm install express
  - Body-Parser: npm install body-parser / yarn add body-parser (forma usada no teste)
