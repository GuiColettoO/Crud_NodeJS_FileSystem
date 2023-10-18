const express = require('express');
const routeBook = require('./routes/book');

const app = express();
app.use(express.json());

app.use('/books', routeBook);

const port = 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})




// For exectue the code, run "nom run start"
