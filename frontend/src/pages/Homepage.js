import React, { useState } from "react";
import { searchBooks, saveBook } from "../api/bookApi";
import BookList from "../components/SearchBookList/SearchBookList.js";
import SearchBar from "../components/SearchBar/SearchBar.js";

const Homepage = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (searchTerm) => {
    const results = await searchBooks(searchTerm);
    setBooks(results);
  };

  const handleSave = async (book) => {
    await saveBook(book);
  };

  return (
    <div>
      <h1>Book Management App</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} onSave={handleSave} />
    </div>
  );
};

export default Homepage;
