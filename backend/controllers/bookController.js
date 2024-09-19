const Book = require("../models/bookModel");

const saveBook = async (req, res) => {
  const { title, author, isbn } = req.body;
  try {
    const existingBook = await Book.findOne({ where: { isbn } });
    if (existingBook) {
      // If the book already exists, return a 409 conflict error
      return res.status(409).json({ error: "Book already exists." });
    }

    // If the book does not exist, create a new one
    const newBook = await Book.create({ title, author, isbn });
    return res.status(201).json(newBook);
  } catch (error) {
    console.error("Error saving book:", error);
    return res.status(400).json({ error: "Unable to save book." });
  }
};

const getBooks = async (req, res) => {
  const books = await Book.findAll();
  return res.status(200).json(books);
};

const getSavedBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: "Unable to fetch saved books." });
  }
};

const deleteSavedBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.destroy({ where: { id } });
    if (deletedBook) {
      return res.status(200).json({ message: "Book deleted successfully." });
    }
    throw new Error("Book not found.");
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { saveBook, getBooks, getSavedBooks, deleteSavedBook };
