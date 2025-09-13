module.exports = function makeDeleteBook({ bookRepository }) {
return async function deleteBook(id) {
const ok = await bookRepository.delete(id);
if (!ok) throw Object.assign(new Error('Book not found'), { status: 404 });
return true;
};
};