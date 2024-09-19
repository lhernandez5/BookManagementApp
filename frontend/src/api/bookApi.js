import axios from "axios";

export const searchBooks = async (searchTerm) => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
  );
  console.log(response.data.items);
  return response.data.items || [];
};

export const saveBook = async (book) => {
  const { title, authors, industryIdentifiers } = book.volumeInfo;
  const isbn = industryIdentifiers[0]?.identifier;

  try {
    await axios.post("http://localhost:3001/api/books", {
      title,
      author: authors[0],
      isbn,
    });
    alert("Book saved successfully!");
  } catch (error) {
    if (error.response && error.response.status === 409) {
      alert("This book is already saved.");
    } else {
      alert("Failed to save the book. Please try again.");
    }
  }
};

export const fetchSavedBooks = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/books");
    return response.data;
  } catch (error) {
    console.log("Error fetching saved books:", error);
    throw error;
  }
};

export const deleteSavedBook = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/api/books/${id}`);
    alert("Book deleted successfully!");
  } catch (error) {
    alert("Failed to delete book.");
  }
};
