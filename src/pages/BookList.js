import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import BookTable from '../components/BookTable';

const BookList = ({ books, onToggle, onDelete }) => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('Tất cả');

  const handleQueryShift = (e) => {
    setKeyword(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredBooks = books.filter((book) => {
    const matchTitle = book.title.toLowerCase().includes(keyword.toLowerCase());
    const matchCategory = category === 'Tất cả' || book.category === category;
    return matchTitle && matchCategory;
  });

  return (
    <div className="book-list-page">
      <h2>Danh sách sách</h2>
      <FilterBar
        keyword={keyword}
        category={category}
        onSearchChange={handleQueryShift}
        onCategoryChange={handleCategoryChange}
      />
      <BookTable
        books={filteredBooks}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
};

export default BookList;
