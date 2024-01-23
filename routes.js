const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.get("/books", controllers.getAllBooks);
router.get("/books/isbn/:isbn", controllers.getBookByISBN);
router.get("/books/author/:author", controllers.getBooksByAuthor);
router.get("/books/title/:title", controllers.getBooksByTitle);
router.get("/books/:id/reviews", controllers.getBookReviews);

module.exports = router;
