const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    reviews: [
      { userId: 1, rating: 5, comment: "A classic! Loved the characters." },
      { userId: 2, rating: 4, comment: "Interesting plot twists." },
    ],
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    reviews: [
      { userId: 3, rating: 5, comment: "Powerful and thought-provoking." },
      { userId: 4, rating: 4, comment: "Compelling storytelling." },
    ],
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    reviews: [
      { userId: 5, rating: 5, comment: "A dystopian masterpiece." },
      { userId: 6, rating: 4, comment: "Thought-provoking and relevant." },
    ],
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "9780241950425",
    reviews: [
      {
        userId: 7,
        rating: 3,
        comment: "Interesting perspective on adolescence.",
      },
      {
        userId: 8,
        rating: 5,
        comment: "Holden Caulfield is an unforgettable character.",
      },
    ],
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    reviews: [
      { userId: 9, rating: 5, comment: "A timeless classic." },
      { userId: 10, rating: 4, comment: "Beautifully written love story." },
    ],
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "9780345339683",
    reviews: [
      { userId: 11, rating: 5, comment: "An enchanting adventure." },
      {
        userId: 12,
        rating: 4,
        comment: "Bilbo Baggins is a delightful character.",
      },
    ],
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isbn: "9780544003415",
    reviews: [
      { userId: 13, rating: 5, comment: "Epic fantasy at its finest." },
      { userId: 14, rating: 4, comment: "A journey worth taking." },
    ],
  },
  {
    id: 8,
    title: "Moby-Dick",
    author: "Herman Melville",
    isbn: "9780142437247",
    reviews: [
      { userId: 15, rating: 3, comment: "A challenging but rewarding read." },
      {
        userId: 16,
        rating: 4,
        comment: "Captain Ahab is a fascinating character.",
      },
    ],
  },
  {
    id: 9,
    title: "Frankenstein",
    author: "Mary Shelley",
    isbn: "9780141439471",
    reviews: [
      {
        userId: 17,
        rating: 4,
        comment: "A haunting tale of creation and responsibility.",
      },
      {
        userId: 18,
        rating: 5,
        comment: "Mary Shelley's genius shines through.",
      },
    ],
  },
  {
    id: 10,
    title: "The Odyssey",
    author: "Homer",
    isbn: "9780140268867",
    reviews: [
      { userId: 19, rating: 5, comment: "A timeless epic." },
      {
        userId: 20,
        rating: 4,
        comment: "Odysseus' journey is filled with adventure.",
      },
    ],
  },
];

exports.getAllBooks = () => books;

exports.getBookByISBN = (isbn) => books.find((book) => book.isbn === isbn);

exports.getBooksByAuthor = (author) =>
  books.filter((book) =>
    book.author.toLowerCase().includes(author.toLowerCase())
  );

exports.getBooksByTitle = (title) =>
  books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

exports.getBookReviews = (id) => {
  const book = books.find((b) => b.id === id);
  return book ? book.reviews : [];
};
