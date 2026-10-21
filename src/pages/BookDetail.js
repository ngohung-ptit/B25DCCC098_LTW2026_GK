import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const bookId = Number(id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return (
      <div className="book-detail-page">
        <p className="not-found">Không tìm thấy sách</p>
        <button type="button" className="btn-back" onClick={() => navigate(-1)}>
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div className="book-detail-page">
      <h2>Thông tin chi tiết</h2>
      <div className="book-detail-info">
        <p>
          <strong>Tên sách: </strong>{book.title}
        </p>
        <p>
          <strong>Tác giả: </strong>{book.author}
        </p>
        <p>
          <strong>Năm xuất bản: </strong>{book.year}
        </p>
        <p>
          <strong>Thể loại: </strong>{book.category}
        </p>
        <p>
          <strong>Trạng thái: </strong>{book.available ? 'Có sẵn' : 'Đang mượn'}
        </p>
      </div>
      <button type="button" className="btn-back" onClick={() => navigate(-1)}>
        Quay lại
      </button>
    </div>
  );
};

export default BookDetail;
