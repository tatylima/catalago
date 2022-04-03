const express = require("express");
const path = require("path");
require('dotenv').config();
const comidas= require("./src/models/comidas");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  const filmes = await comidas.findAll();
  console.log(comidas);
  console.log(typeof(comidas));
  res.render("index", {
    comidas,
  });
});

app.get("/comidas/:id", async (req, res) => {
    const filme = await comidas.findByPk(req.params.id);

    res.render("detalhes", {
        comidas,
    });
});

app.get("/criar", (req, res) => {
  res.render("criar",{mensagem: ""});
});

app.post("/criar", async (req, res) => {
  const { nome, descricao, imagem } = req.body;
  
  if (!nome) {
    res.render("criar", {
      mensagem: "Nome é obrigatório",
    });
  }

  if (!imagem) {
    res.render("criar", {
      mensagem: "Imagem é obrigatório",
    });
  }

  try {
    const comidas = await comidas.create({
      nome,
      descricao,
      imagem,
    });

    res.render("criar", {
      filme,
      mensagem: ""
    });
  } catch (err) {
    console.log(err);

    res.render("criar", {
      mensagem: "Ocorreu um erro ao cadastrar a Receita!",
    });
  }
});

app.get("/editar/:id", async (req, res) => {
  const comidas = await comidas.findByPk(req.params.id);

  if (!comidas) {
    res.render("editar", {
      mensagem: "Receita não encontrado!",
    });
  }

  res.render("editar", {
    comidas, mensagem: ""
  });
});

app.post("/editar/:id", async (req, res) => {
  const comida = await comidas.findByPk(req.params.id);

  const { nome, descricao, imagem } = req.body;

  comidas.nome = nome;
  comidas.descricao = descricao;
  comidas.imagem = imagem;

  const comidasEditado = await comidas.save();

  res.render("editar", {
    comidas: comidasEditado,
    mensagem: "Receita editado com sucesso!",
  });
});

app.get("/deletar/:id", async (req, res) => {
  const comidas = await comidas.findByPk(req.params.id);

  if (!comidas) {
    res.render("deletar", {
      mensagem: "Comida não encontrado!",
    });
  }

  res.render("deletar", {
    comidas,mensagem: ""
  });
});

app.post("/deletar/:id", async (req, res) => {
  const comidas = await comidas.findByPk(req.params.id);

  if (!comidas) {
    res.render("deletar", {
      mensagem: "comida não encontrado!",
    });
  }

  await comidas.destroy();
  res.redirect("/");
});
app.listen(port || process.env.PORT, () => console.log(`Servidor rodando em http://localhost:${port}`));