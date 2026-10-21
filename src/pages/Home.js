import React from 'react';

const Home = ({ books }) => {
  const totalBooks = books.length;

  const borrowedBooks = books.reduce(
    (count, book) => (!book.available ? count + 1 : count),
    0
  );

  const latestYear =
    books.length > 0
      ? books.reduce(
        (max, book) => (book.year > max ? book.year : max),
        0
      )
      : 0;

  return (
    <div className="home-page">
      <h1>Thư viện sách</h1>
      <div className="home-stats">
        <p>
          <strong>Tổng số sách: </strong>{totalBooks}
        </p>
        <p>
          <strong>Số sách đang cho mượn: </strong>{borrowedBooks}
        </p>
        <p>
          <strong>Năm xuất bản mới nhất: </strong>{latestYear}
        </p>
      </div>
    </div>
  );
};

export default Home;
