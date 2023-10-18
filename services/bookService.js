const fs = require('fs');

function getAllBooks() {
  return JSON.parse(fs.readFileSync('./books.json'));
}

function getBookForId(id) {
  const books = JSON.parse(fs.readFileSync('./books.json'));

  const bookFilter = books.filter( book => book.id === id);

  return bookFilter[0];
}

function insertBook(newBook) {
  const books = JSON.parse(fs.readFileSync('./books.json'));

  const newListOfBooks = [...books, newBook];

  fs.writeFileSync('./books.json', JSON.stringify(newListOfBooks));
}

function updateBook(modifiedBook, id) {
  let bookCurrent = JSON.parse(fs.readFileSync('./books.json'));
  const indexModified = bookCurrent.findIndex(book => book.id === id);

  const contentChanged = { ...bookCurrent[indexModified], ...modifiedBook};

  bookCurrent[indexModified] = contentChanged;

  fs.writeFileSync('./books.json', JSON.stringify(bookCurrent));
}

function deleteBookForId(id) {
  const books = JSON.parse(fs.readFileSync('./books.json'));

  const filterBook = books.filter(book => book.id !== id);
  fs.writeFileSync('./books.json', JSON.stringify(filterBook));
}

module.exports = {
  getAllBooks, getBookForId, insertBook, updateBook, deleteBookForId
}
