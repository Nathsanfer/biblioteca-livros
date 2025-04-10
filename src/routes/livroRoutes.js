import express from "express";
import LivroController from "../controllers/livroController.js";

const livrosRouter = express.Router();

// Rotas de Livros
// GET /api/livros - Listar todos os livros
livrosRouter.get("/", LivroController.getAllLivros);

// GET /api/livros/:id - Obter um livro pelo ID
livrosRouter.get("/:id", LivroController.getLivroById);

// POST /api/livros - Criar um novo livro
livrosRouter.post("/", LivroController.createLivro);

// PUT /api/livros/:id - Atualizar um livro
livrosRouter.put("/:id", LivroController.updateLivro);

// DELETE /api/livros/:id - Remover um livro
livrosRouter.delete("/:id", LivroController.deleteLivro);

export default livrosRouter;
