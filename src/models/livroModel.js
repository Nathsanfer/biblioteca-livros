import prisma from "../../prisma/prisma.js";


class LivroModel {
  // Obter todos os livros
  async findAll() {
    const livros = await prisma.livro.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(livros);

    return livros;
  }

  // Obter um livro pelo ID
  async findById(id) {
    const livro = await prisma.livro.findUnique({
      where: {
        id: Number(id),
      },
    });

    return livro;
  }

  // Criar um novo livro
  async create(
    title,
    author,
    publisher,
    isbn,
    category,
    year,
    description,
  ) {
    const newLivro = await prisma.livro.create({
      data: {
        title,
        author,
        publisher,
        isbn,
        category,
        year,
        description,
      },
    });

    return newLivro;
  }

  // Atualizar um livro
  async update(
    id,
    title,
    author,
    publisher,
    isbn,
    category,
    year,
    description,
  ) {
    const livro = await this.findById(id);

    if (!livro) {
      return null;
    }

    // Atualize o livro existente com os novos dados
    const data = {};
    if (title !== undefined) {
      data.title = title;
    }
    if (author !== undefined) {
      data.author = author;
    }
    if (publisher !== undefined) {
      data.publisher = publisher;
    }
    if (isbn !== undefined) {
      data.isbn = isbn;
    }
    if (category !== undefined) {
      data.category = category;
    }
    if (year !== undefined) {
      data.year = year;
    }
    if (description !== undefined) {
      data.description = description;
    }

    const livroUpdated = await prisma.livro.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return livroUpdated;
  }

  // Remover um livro
  async delete(id) {
    const livro = await this.findById(id);

    if (!livro) {
      return null;
    }

    await prisma.livro.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new LivroModel();
