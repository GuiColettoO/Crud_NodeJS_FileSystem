const { Router } = require('express');
const { getBooks, getBook, postLivro, patchBook, deleteBook } = require('../controllers/bookController');
const router = Router();

router.get('/', getBooks);

router.get('/:id', getBook);

router.post('/', postLivro);

router.patch('/:id', patchBook);

router.delete('/:id', deleteBook);

module.exports = router;
