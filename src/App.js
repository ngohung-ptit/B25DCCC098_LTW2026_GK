const BUILD_TAG = "qf-2817";
/* eslint-disable import/first, no-unused-vars */

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Home from './pages/Home';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import BookDetail from './pages/BookDetail';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get('/data/books.json', { signal: controller.signal })
      .then((res) => {
        setBooks(res.data);
        setError(null);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setError(err.message || 'Không tải được dữ liệu');
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const handleAddBook = (newBook) => {
    const maxId = books.length > 0 ? Math.max(...books.map((b) => b.id)) : 0;
    const bookToAdd = {
      ...newBook,
      id: maxId + 1,
    };
    setBooks([...books, bookToAdd]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const handleToggleStatus = (id) => {
    setBooks(
      books.map((b) =>
        b.id === id ? { ...b, available: !b.available } : b
      )
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Layout loading={loading} error={error} />}>
        <Route index element={<Home books={books} />} />
        <Route
          path="books"
          element={
            <BookList
              books={books}
              onToggle={handleToggleStatus}
              onDelete={handleDeleteBook}
            />
          }
        />
        <Route
          path="books/new"
          element={<AddBook onAdd={handleAddBook} />}
        />
        <Route
          path="books/:id"
          element={<BookDetail books={books} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
