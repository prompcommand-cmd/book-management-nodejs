const IBookRepository = require("../../domain/interfaces/IBookRepository");
const Book = require("../../domain/entities/book");

class BookRepositorySequelize extends IBookRepository {
  async getAll() {
    return await Book.findAll();
  }

  async findById(id) {
    return await Book.findByPk(id);
  }

  async create(book) {
    const created = await Book.create(book);
    return created.toJSON();
  }

  async update(id, data) {
    const book = await Book.findByPk(id);
    if (!book) return null;
    await book.update(data);
    return book.toJSON();
  }

  async delete(id) {
    const book = await Book.findByPk(id);
    if (!book) return false;
    await book.destroy();
    return true;
  }
}

module.exports = BookRepositorySequelize;
