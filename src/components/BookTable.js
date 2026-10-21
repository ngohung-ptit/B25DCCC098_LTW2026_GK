import React from 'react';
import BookRow from './BookRow';

const BookTable = ({ books, onToggle, onDelete }) => {
  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>Tên sách</th>
          <th>Tác giả</th>
          <th>Năm</th>
          <th>Thể loại</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {books.length > 0 ? (
          books.map((book) => (
            <BookRow
              key={book.id}
              book={book}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        ) : (
          <tr>
            <td colSpan="6" style={{ textAlign: 'center', padding: '16px', color: '#6b7280' }}>
              Không có dữ liệu
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default BookTable;
