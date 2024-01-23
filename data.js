const books = [
  // Sample book data
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
    isbn: "1234567890",
    reviews: [],
  },
];

exports.getAllBooks = () => books;

exports.getBookByISBN = (isbn) => books.find((book) => book.isbn === isbn);
