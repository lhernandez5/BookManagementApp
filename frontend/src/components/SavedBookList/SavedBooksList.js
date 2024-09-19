import React, { useEffect, useState } from "react";
import { fetchSavedBooks, deleteSavedBook } from "../../api/bookApi";

const SavedBookList = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    //Fetch the saved books from the server when the component mounts
    const getSavedBooks = async () => {
      try {
        const books = await fetchSavedBooks();
        setSavedBooks(books);
      } catch (error) {
        console.log("Error fetching saved books:", error);
      }
    };
    getSavedBooks();
  }, []);

  const handleDelete = async (id) => {
    await deleteSavedBook(id);
    setSavedBooks(savedBooks.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Saved Books</h1>
      <ul>
        {savedBooks.map((book) => {
          return (
            <li key={book.id}>
              <p> Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>ISBN: {book.isbn}</p>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SavedBookList;
