import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = ({ loading, error }) => {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="main-content">
        {loading ? (
          <p className="loading-state">Đang tải...</p>
        ) : error ? (
          <p className="error-state">Không tải được dữ liệu</p>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Layout;
