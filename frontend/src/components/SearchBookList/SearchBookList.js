import React from "react";

const BookList = ({ books, onSave }) => {
  return (
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>Author: {book.volumeInfo.authors?.[0]}</p>
            <button onClick={() => onSave(book)}>Save Book</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
