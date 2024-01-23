// controllers.js

const data = require("./data");

// Task 1: Get the book list available in the shop
exports.getAllBooks = async (req, res) => {
  const books = data.getAllBooks();
  res.json(books);
};

// Task 2: Get the books based on ISBN
exports.getBookByISBN = async (req, res) => {
  const isbn = req.params.isbn;
  const book = data.getBookByISBN(isbn);
  res.json(book);
};

// Task 3: Get all books by Author
exports.getBooksByAuthor = async (req, res) => {
  const author = req.params.author;
  const books = data.getBooksByAuthor(author);
  res.json(books);
};

// Task 4: Get all books based on Title
exports.getBooksByTitle = async (req, res) => {
  const title = req.params.title;
  const books = data.getBooksByTitle(title);
  res.json(books);
};

// Task 5: Get book Review
exports.getBookReview = async (req, res) => {
  const id = parseInt(req.params.id);
  const reviews = data.getBookReviews(id);
  res.json(reviews);
};

// Task 6: Register New user
exports.registerUser = async (req, res) => {
  // Implementation for user registration
  // You can access user information from req.body
  res.json({ message: "User registered successfully" });
};

// Task 7: Login as a Registered user
exports.loginUser = async (req, res) => {
  // Implementation for user login
  // You can access login credentials from req.body
  res.json({ message: "User logged in successfully" });
};

// Registered Users:
// Task 8: Add/Modify a book review
exports.addModifyBookReview = async (req, res) => {
  // Implementation for adding or modifying a book review
  // You can access review information from req.body
  res.json({ message: "Review added/modified successfully" });
};

// Task 9: Delete book review added by that particular user
exports.deleteBookReview = async (req, res) => {
  // Implementation for deleting a book review
  // You can access review ID from req.params.id
  res.json({ message: "Review deleted successfully" });
};

// Node.JS program with 4 methods:
// Task 10: Get all books – Using async callback function
exports.getAllBooksAsync = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const books = data.getAllBooks();
      resolve(books);
    }, 1000);
  });
};

// Task 11: Search by ISBN – Using Promises
exports.searchByISBN = async (isbn) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = data.getBookByISBN(isbn);
      resolve(book);
    }, 1000);
  });
};

// Task 12: Search by Author
exports.searchByAuthor = async (author) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const books = data.getBooksByAuthor(author);
      resolve(books);
    }, 1000);
  });
};

// Task 13: Search by Title
exports.searchByTitle = async (title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const books = data.getBooksByTitle(title);
      resolve(books);
    }, 1000);
  });
};
