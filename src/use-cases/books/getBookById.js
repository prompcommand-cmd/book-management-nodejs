module.exports = function makeGetBookById({ bookRepository }) {
  return async function getBookById(id) {
    const book = await bookRepository.findById(id);
    if (!book)
      throw Object.assign(new Error("Book not found"), { status: 404 });
    return book;
  };
};
