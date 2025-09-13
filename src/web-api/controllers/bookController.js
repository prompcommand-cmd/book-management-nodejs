const createBookUseCase = require("../../use-cases/books/createBook");
const getAllBooksUseCase = require("../../use-cases/books/getAllBooks");
const getBookByIdUseCase = require("../../use-cases/books/getBookById");
const updateBookUseCase = require("../../use-cases/books/updateBook");
const deleteBookUseCase = require("../../use-cases/books/deleteBook");
const BookRepositorySequelize = require("../../infratructure/repositories/BookRepositorySequelize");

const bookRepository = new BookRepositorySequelize();

const createBook = createBookUseCase({ bookRepository });
const getAllBooks = getAllBooksUseCase({ bookRepository });
const getBookById = getBookByIdUseCase({ bookRepository });
const updateBook = updateBookUseCase({ bookRepository });
const deleteBook = deleteBookUseCase({ bookRepository });

module.exports = {
  async create(req, res, next) {
    try {
      const { title, author, year } = req.body;
      const y = typeof year === "string" ? parseInt(year, 10) : year;
      const book = await createBook({ title, author, year: y });
      res.status(201).json(book);
    } catch (err) {
      next(err);
    }
  },

  async list(req, res, next) {
    try {
      const books = await getAllBooks();
      res.json(books);
    } catch (err) {
      next(err);
    }
  },

  async detail(req, res, next) {
    try {
      const book = await getBookById(parseInt(req.params.id, 10));
      res.json(book);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const data = req.body;
      if (data.year)
        data.year =
          typeof data.year === "string" ? parseInt(data.year, 10) : data.year;
      const updated = await updateBook(parseInt(req.params.id, 10), data);
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  async delete(req, res, next) {
    try {
      await deleteBook(parseInt(req.params.id, 10));
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  },
};
