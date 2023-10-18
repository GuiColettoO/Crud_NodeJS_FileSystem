const { getAllBooks, getBookForId, insertBook, updateBook, deleteBookForId } = require('../services/bookService');

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;

    if(id && Number(id)) {
      const book = getBookForId(id);
      res.send(book);
    }else {
      res.status(422);
      res.send("Id invalid!");
    }

  }catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const newBook = req.body;
    if(req.body.nome) {
      insertBook(newBook);
      res.status(201);
      res.send('Book inserted with success!')
    }else{
      res.status(422);
      res.send("The name field is required!");
    }
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
}

function patchBook(req, res) {
  try{
    const id = req.params.id;
    if(id && Number(id)) {
      const body = req.body
      updateBook(body, id);
      res.status(201);
      res.send("Book update with success!")
    }else{
      res.status(422);
      res.send("Id invalid!");
    }

  }catch(error){
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try{
    const id = req.params.id;

    if(id && Number(id)){
      deleteBookForId(id);
      res.status(201);
      res.send("Book delete with success!")
    }else{
      res.status(422);
      res.send("Id invalid!");
    }
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks, getBook, postLivro, patchBook, deleteBook
}
