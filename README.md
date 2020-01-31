<p align="center">
  <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" alt="gostack" width="200">
</p>

# Bootcamp GoStack - Módulo 01 / Desafio 01

Node.js / Express - Aplicação API REST, usada pra criar projetos e definir suas determinadas tarefas.

**OBS:** Por se tratar de um projeto com finalidade de aplicar conhecimentos sobre APIs e Middlewares, não possui conexão com banco de dados e suas informações são resetadas toda vez que a aplicação for iniciada.



## Tecnologias e ferramentas

<ul>
<li>Node.js</li>
<li>Express</li>
<li>Nodemon para desenvolvimento</li>
</ul>

<p>Foram abordados conceitos de rest e spread, middleware, desestruturação, templates literais.</p>


## Começando

##### Instalar as dependências:

```
npm install
```
ou
```
yarn
```



##### Executar a aplicação:

```
node index.js
```
ou
```
npm run dev
```
ou
```
yarn dev
```



### Endereço

A aplicação por padrão será executada na porta 3000: **http://localhost:3000**



### Rotas


##### Projetos
```sh
GET - '/projects'
# exibir todos os projetos
# retorno: retorna uma lista com todos os projetos cadastrados (json)

POST - '/projects'
# salvar novo projeto
# corpo da requisição: { "id": 2, "title": "título do projeto" } (json)
# retorno: { result: "Projeto criado com sucesso!" } (json)
            
PUT - '/projects/:id'
# atualizar projeto, requer id do projeto como parâmetro
# corpo da requisição: { title: "título do projeto" } (json)
# retorno: {result: "Projeto atualizado com sucesso!"} (json)
            
DELETE - '/projects/:id'
#deletar projeto, requer id do projeto como parâmetro
# retorno: {result: "Projeto excluido com sucesso!"} (json)
```

##### Tarefas
```sh
GET - '/projects/:id/tasks'
# exibir todas as tarefa do projeto, requer id do projeto como parâmetro
# retorno: retorna uma lista com todas as tarefa que foram cadastradas (json)

POST - '/projects/:id/tasks'
# salvar nova tarefa para o projeto, requer id do projeto como parâmetro
# corpo da requisição: { title: "título da tarefa" } (json)
# retorno: {result: "Task criada com sucesso!"} (json)
```