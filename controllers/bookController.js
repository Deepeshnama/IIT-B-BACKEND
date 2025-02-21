const Book = require("../models/book.model");

const History = require("../models/history.model");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new Book({ title, author });
    await newBook.save();
    res.status(201).json({ message: "Book added successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedBook) return res.status(404).json({ error: "Book not found" });
    res.json({ message: "Book updated successfully", book: updatedBook });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) return res.status(404).json({ error: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.borrowBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) return res.status(404).json({ error: "Book not found" });
    if (book.status === "Borrowed")
      return res.status(400).json({ error: "Book already borrowed" });

    book.status = "Borrowed";
    book.borrowedBy = req.user.id;
    await book.save();

    await History.create({ user: req.user.id, book: id, action: "Borrowed" });

    res.json({ message: "Book borrowed successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) return res.status(404).json({ error: "Book not found" });
    if (
      book.status !== "Borrowed" ||
      book.borrowedBy.toString() !== req.user.id
    )
      return res.status(400).json({ error: "You cannot return this book" });

    book.status = "Available";
    book.borrowedBy = null;
    await book.save();

    await History.create({ user: req.user.id, book: id, action: "Returned" });

    res.json({ message: "Book returned successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
