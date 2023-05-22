import { useState } from "react";

import "./Book.css";

const Book = ({ book, deleteBook }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="book">
      <img
        className="book-image"
        src={book.imageUrl}
        alt={book.name}
        onClick={openPopup}
      />
      <h2 className="book-name">{book.name}</h2>
      {isPopupOpen && (
        <div className="book-popup">
          <div className="book-popup-content">
            <h2 className="book-popup-name">{book.name}</h2>
            <img
              className="book-popup-image"
              src={book.imageUrl}
              alt={book.name}
              onClick={openPopup}
            />
            <div className="book-popup-details">
              <p className="book-popup-price">
                <span className="book-popup-title">Price:</span> ${book.price}
              </p>
              <p className="book-popup-category">
                <span className="book-popup-title">Category:</span>{" "}
                {book.category}
              </p>
              <p className="book-popup-description">
                <span className="book-popup-title">Description:</span>{" "}
                {book.description}
              </p>
            </div>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
      <button className="delete-btn" onClick={deleteBook}>
        Delete
      </button>
    </div>
  );
};

export default Book;
