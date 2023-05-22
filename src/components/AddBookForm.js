import { useState } from "react";

import "./AddBookForm.css";

const AddBookForm = ({ addBook }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isAddingBook, setIsAddingBook] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ name, price, category, description, imageUrl });
    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
    setImageUrl("");
    setIsAddingBook(false);
  };

  const handleAddBookClick = () => {
    setIsAddingBook(true);
  };

  if (!isAddingBook) {
    return (
      <section>
        <button className="new-book-btn" onClick={handleAddBookClick}>
          Add a New Book
        </button>
      </section>
    );
  }

  return (
    <section>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows="2"
          required
        ></textarea>
        <button className="add-book-btn" type="submit">
          Add the Book
        </button>
      </form>
    </section>
  );
};

export default AddBookForm;
