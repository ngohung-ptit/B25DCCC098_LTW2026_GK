import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import BookTable from '../components/BookTable';

const BookList = ({ books, onToggle, onDelete }) => {
  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState('');
  const [category, setCategory] = useState('Tất cả');

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const filteredBooks = books.filter((book) => {
    const matchTitle = book.title
      .toLowerCase()
      .includes(debouncedKeyword.toLowerCase());
    const matchCategory =
      category === 'Tất cả' || book.category === category;
    return matchTitle && matchCategory;
  });

  return (
    <div className="book-list-page">
      <h2>Danh sách sách</h2>
      <FilterBar
        keyword={keyword}
        debouncedKeyword={debouncedKeyword}
        category={category}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <p className="found-count">
        Tìm thấy {filteredBooks.length} cuốn sách
      </p>
      {filteredBooks.length === 0 && (
        <p className="no-data">Không có dữ liệu</p>
      )}
      <BookTable
        books={filteredBooks}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
};

export default BookList;
