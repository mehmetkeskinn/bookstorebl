import Book from "./Book";

import "./Booklist.css";

const BookList = ({ books, deleteBook }) => {
  return (
    <section className="book-list-section">
      <h2 className="section-header">Book List</h2>
      <div className="book-list">
        {books.map((book, index) => (
          <Book key={index} book={book} deleteBook={() => deleteBook(index)} />
        ))}
      </div>
    </section>
  );
};

export default BookList;
