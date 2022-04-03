Livro de Receitas

Nosso projeto final é um CRUD.

CRUD é um acrônimo que representa as 4 operações básicas que podemos fazer em uma base de dados.
CREATE Criar novos registros
READ Ler/exibir registros
UPDATE Atualizar registros
DELETE Remover registros

Escolhemos fazer o tema receitas , onde o usuario poderá, criar receitas, exibir , atualizar seus registros , e remover sua criação.

Apresentamos um cardapio com a gastromia brasileira, demonstrando as melhores receitas  de cada região do país.

Criamos um Banco de Dados para a nossa aplicação, e dentro dele, criamos uma tabela comidas com os campos: nome, descrição, imagem, e vamos popular com algumas comidas que consideramos interessantes.

Agora vamos o nosso projeto JavaScript, utilizando o Express em conjunto com o ejs para retornar a nossa tela inicial, essa tela, será a tela aonde mostraremos a lista com todos as comidas.

O Dotenv é uma biblioteca para o NODE que irá nos ajudar a criar variáveis de ambiente em nosso projeto para proteger dados sensíveis em nossa aplicação, como senhas, links de conexão com o banco de dados entre outros dados.

Para fazer a conexão do Node com o nosso Banco de Dados, utilizamos o  Sequelize, um dos ORMs mais famosos de NodeJS.

Ápos a conecção com Banco de dados , criamos um modelo, ele é responsável por avisar o Node quais tabelas temos, e quais os atributos das tabelas. 

Criamos varias rotas , para criar, editar, deletar, atualizar nosso projeto.

Projeto rodando em http://localhost:3000/.