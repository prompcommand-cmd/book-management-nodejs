const bookRepository = require("../../infratructure/repositories/BookRepositorySequelize");

module.exports = function makeGetAllBooks({ bookRepository }) {
  return async function getAllBooks() {
    const books = await bookRepository.getAll();
    return books;
  };
};
