const data = require("./data");

exports.getAllBooks = (req, res) => {
  const books = data.getAllBooks();
  res.json(books);
};

exports.getBookByISBN = (req, res) => {
  const isbn = req.params.isbn;
  const book = data.getBookByISBN(isbn);
  res.json(book);
};

exports.getBooksByAuthor = (author) => {
  return new Promise((resolve, reject) => {
    const filteredBooks = books.filter((book) => book.author === author);
    resolve(filteredBooks);
  });
};
