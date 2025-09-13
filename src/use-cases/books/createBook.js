const { validateCreate } = require("../../web-api/validators/BookValidator");

module.exports = function makeCreateBook({ bookRepository }) {
  return async function createBook(payload) {
    const { title, author, year } = await validateCreate(payload);
    const book = await bookRepository.create({ title, author, year });
    return book;
  };
};
