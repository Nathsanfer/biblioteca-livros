import LivroModel from "../models/livroModel.js";

class LivroController {
  // GET /api/livros
  async getAllLivros(req, res) {
    try {
      const livros = await LivroModel.findAll();
      res.json(livros);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
      res.status(500).json({ error: "Erro ao buscar livros" });
    }
  }

  // GET /api/livros/:id
  async getLivroById(req, res) {
    try {
      const { id } = req.params;

      const livro = await LivroModel.findById(id);

      if (!livro) {
        return res.status(404).json({ error: "Livro não encontrado" });
      }

      res.json(livro);
    } catch (error) {
      console.error("Erro ao buscar livro:", error);
      res.status(500).json({ error: "Erro ao buscar livro" });
    }
  }

  // POST /api/livros
  async createLivro(req, res) {
    try {
      // Validação básica
      const {
        title,
        author,
        publisher,
        isbn,
        category,
        year,
        description,
      } = req.body;

      // Verifica se o título do livro foi fornecido

      if (
        !title ||
        !author ||
        !publisher ||
        !isbn ||
        !category ||
        !year ||
        !description
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo livro
      const newLivro = await LivroModel.create(
        title,
        author,
        publisher,
        isbn,
        category,
        year,
        description
      );

      if (!newLivro) {
        return res.status(400).json({ error: "Erro ao criar livro" });
      }

      res.status(201).json(newLivro);
    } catch (error) {
      console.error("Erro ao criar livro:", error);
      res.status(500).json({ error: "Erro ao criar livro" });
    }
  }

  // PUT /api/livros/:id
  async updateLivro(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        author,
        publisher,
        isbn,
        category,
        year,
        description
      } = req.body;

      // Atualizar o livro
      const updatedLivro = await LivroModel.update(
        id,
        title,
        author,
        publisher,
        isbn,
        category,
        year,
        description
      );

      if (!updatedLivro) {
        return res.status(404).json({ error: "Livro não encontrado" });
      }

      res.json(updatedLivro);
    } catch (error) {
      console.error("Erro ao atualizar livro:", error);
      res.status(500).json({ error: "Erro ao atualizar livro" });
    }
  }

  // DELETE /api/livros/:id
  async deleteLivro(req, res) {
    try {
      const { id } = req.params;

      // Remover o livro
      const result = await LivroModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Livro não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover livro:", error);
      res.status(500).json({ error: "Erro ao remover livro" });
    }
  }
}

export default new LivroController();
