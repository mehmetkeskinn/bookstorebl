import { useState, useEffect } from "react";

import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import Layout from "./components/Layout/Layout";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/mehmetkeskinn/bookstorebl/main/public/books.json"
      );
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <Layout>
      <AddBookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </Layout>
  );
};

export default App;
