// routes.js

const express = require("express");
const router = express.Router();
const controllers = require("./controllers");
const middlewares = require("./middlewares");

// Task 1: Get the book list available in the shop - 2 Points
router.get("/books", controllers.getAllBooks);

// Task 2: Get the books based on ISBN - 2 Points
router.get("/books/isbn/:isbn", controllers.getBookByISBN);

// Task 3: Get all books by Author - 2 Points
router.get("/books/author/:author", controllers.getBooksByAuthor);

// Task 4: Get all books based on Title - 2 Points
router.get("/books/title/:title", controllers.getBooksByTitle);

// Task 5: Get book Review - 2 Points
router.get("/books/:id/reviews", controllers.getBookReview);

// Task 6: Register New user - 3 Points
router.post("/register", controllers.registerUser);

// Task 7: Login as a Registered user - 3 Points
router.post("/login", controllers.loginUser);

// Authenticated routes (require JWT authentication)

// Task 8: Add/Modify a book review - 2 Points
router.post(
  "/reviews",
  middlewares.authenticateUser,
  controllers.addModifyBookReview
);
router.put(
  "/reviews/:id",
  middlewares.authenticateUser,
  controllers.addModifyBookReview
);

// Task 9: Delete book review added by that particular user - 2 Points
router.delete(
  "/reviews/:id",
  middlewares.authenticateUser,
  controllers.deleteBookReview
);

// Admin routes (require admin role)

// Task 10: Get all books – Using async callback function - 2 Points
router.get(
  "/admin/books",
  middlewares.authenticateUser,
  middlewares.checkAdminRole,
  controllers.getAllBooksAsync
);

// Task 11: Search by ISBN – Using Promises - 2 Points
router.get(
  "/admin/books/isbn/:isbn",
  middlewares.authenticateUser,
  middlewares.checkAdminRole,
  controllers.searchByISBN
);

// Task 12: Search by Author - 2 Points
router.get(
  "/admin/books/author/:author",
  middlewares.authenticateUser,
  middlewares.checkAdminRole,
  controllers.searchByAuthor
);

// Task 13: Search by Title - 2 Points
router.get(
  "/admin/books/title/:title",
  middlewares.authenticateUser,
  middlewares.checkAdminRole,
  controllers.searchByTitle
);

module.exports = router;
