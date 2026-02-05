import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoryManager.css';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const API_URL = 'http://localhost:8080/api/v1/admin/categories';

  const fetchCategories = async () => {
    try {
      const res = await axios.get(API_URL);
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert('Vui lòng nhập tên danh mục');

    try {
      await axios.post(API_URL, { name });
      setName('');
      fetchCategories();
    } catch (err) {
      alert('Không thể thêm danh mục');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn chắc chắn muốn xóa?')) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchCategories();
    } catch {
      alert('Xóa thất bại');
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-content">

        <h2 className="admin-title">Quản lý Danh mục</h2>

        <form className="category-form" onSubmit={handleAddCategory}>
          <input
            type="text"
            className="category-input"
            placeholder="Nhập tên danh mục mới..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn-primary">
            Thêm Danh Mục
          </button>
        </form>

        <div className="table-wrapper">
          <table className="category-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên Danh Mục</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {categories.length ? (
                categories.map((cat) => (
                  <tr key={cat.id}>
                    <td>{cat.id}</td>
                    <td>{cat.name}</td>
                    <td>
                      <button
                        className="btn-danger"
                        onClick={() => handleDelete(cat.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="empty-text">
                    Chưa có dữ liệu
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default CategoryManager;
