const express = require('express');

const app = express();

// Informa ao Express que o formato experado para manipulação de dados é o JSON
app.use(express.json());

// Inicia a constante onde serão armazenados os nossos projetos
const projects = [
    {
        "id": 1,
        "title": "Projeto 1",
        "tasks": ["task01", "task02", "task03"]
    }

];

// Middleware Global para criar log de requisição
app.use((req, res, next) =>{

    console.count();
    return next();

});

// Middleware para verificar se existe um projeto
const get_project = (req, res, next) => {

    // Guarda o ID do projeto
    let { id } = req.params;

    // Busca o índice do projeto no array
    let project = projects.findIndex(data => data.id == id);

    // Se o projeto não existir, retorna um erro.
    if(project == -1){
        return res.status(400).json({error: "Projeto não encontrado!"})
    }

    // Adiciona a requisição o ID (índice do array) do projeto
    req.project_index = project;

    // Adiciona a requisição o projeto em si
    req.project = projects[project];

    return next();

}

// C | Cria um projeto
app.post('/projects', (req, res) => {

    const {id, title} = req.body;

    let project = projects.find(data => data.id == id);
    
    if(project){
        return res.status(400).json({error: `Projeto com ID ${id} já existe!`});
    }

    projects.push({
        "id": id,
        "title": title,
        "tasks": []
    })

    return res.json({result: "Projeto criado com sucesso!"});

});

// R | Ler um projeto
app.get('/projects/:id', get_project, (req, res) => {

    return res.json(req.project);

});

// U | Atualiza um projeto
app.put('/projects/:id', get_project, (req, res) => {

    let {title} = req.body;
    let project = req.project;

    project.title = title;

    return res.json({result: "Projeto atualizado com sucesso!"});

});

// D | Deleta um projeto
app.delete('/projects/:id', get_project, (req, res) => {

    projects.splice(req.project_index, 1);
    return res.json({result: "Projeto excluido com sucesso!"});

});

// Adiciona tasks em um projeto
app.post('/projects/:id/tasks', get_project, (req, res) => {

    let { title } = req.body;

    req.project.tasks.push(title);

    return res.json({result: "Task criada com sucesso!"});

});

// Exibe todos os projetos
app.get('/projects', (req, res) => {

    return res.json(projects);

});

// Exibe todas as tasks de um projeto
app.get('/projects/:id/tasks', get_project, (req, res) => {

    let tasks = req.project.tasks;
    return res.json(tasks);

});

// O projeto escuta na porta 3000 (http://localhost:3000)
app.listen(3000);