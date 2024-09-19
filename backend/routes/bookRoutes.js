const express = require("express");
const {
  saveBook,
  getBooks,
  getSavedBooks,
  deleteSavedBook,
} = require("../controllers/bookController");

const router = express.Router();

router.post("/books", saveBook);
router.get("/books", getBooks);
router.get("/savedBooks", getSavedBooks);
router.delete("/books/:id", deleteSavedBook);

module.exports = router;
