const express = require("express");
const app = express();
const port = 4000;
const { query } = require('./database');
require("dotenv").config();

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  res.on("finish", () => {
    // the 'finish' event will be emitted when the response is handed over to the OS
    console.log(`Response status: ${res.statusCode}`);
  });
  next();
});
app.use(express.json());

function getNextIdFromCollection(collection) {
  if (collection.length === 0) return 1;
  const lastRecord = collection[collection.length - 1];
  return lastRecord.id + 1;
}

app.get("/", (req, res) => {
  res.send("Welcome to the Job App Tracker API!!!!");
});

app.get("/books", async (req, res) => {
  try {
    const allBooks = await query("SELECT * FROM books_app");
    res.json(allBooks.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/books/:id", async (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  try {
    const book = await query("SELECT * FROM books_app WHERE id = $1", [
      bookId,
    ]);
    const foundBook = book.rows[0];
    if (foundBook) {
      res.json(foundBook);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/books", async (req, res) => {
  const { title, author, genre, release_date, quantity, status } = req.body;

  try {
    const newBook = await query(
      "INSERT INTO books_app (title, author, genre, release_date, quantity, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [title, author, genre, release_date, quantity, status]
    );

    res.status(201).json(newBook.rows[0]);
  } catch (err) {
    console.error(err,"error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
