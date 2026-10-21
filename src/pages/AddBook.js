import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data';

const AddBook = ({ onAdd }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('Văn học');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !year.toString().trim() || !category) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    setError('');
    onAdd({
      title: title.trim(),
      author: author.trim(),
      year: Number(year),
      category,
      available: true,
    });

    navigate('/books', { replace: true });
  };

  return (
    <div className="add-book-page">
      <h2>Thêm sách mới</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label htmlFor="title">Tên sách</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Tác giả</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Năm xuất bản</label>
          <input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Thể loại</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-submit">
          Thêm
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AddBook;
