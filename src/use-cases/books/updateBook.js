const { validateUpdate } = require("../../web-api/validators/BookValidator");

module.exports = function makeUpdateBook({ bookRepository }) {
  return async function updateBook(id, payload) {
    const validData = await validateUpdate(payload);
    const updatedBook = await bookRepository.update(id, validData);
    if (!updatedBook) {
      throw { status: 404, message: "Book not found" };
    }

    return updatedBook;
  };
};
