import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getAllCategories,
  getProductsByCategory,
  getAllProducts,
} from "../../services/productService";
import ProductCard from "../../component/ProductCard";
import Pagination from "../../component/Pagination";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data || []);
      } catch (err) {
        console.error("Lỗi lấy danh mục:", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts(id, currentPage);
  }, [id, currentPage]);

  const fetchProducts = async (cateId, page) => {
    setLoading(true);
    try {
      let res;
      if (cateId) {
        res = await getProductsByCategory(Number(cateId), page, 12);
      } else {
        res = await getAllProducts(page, 12);
      }

      setProducts(res.content || []);
      setTotalPages(res.totalPages || 0);
    } catch (err) {
      console.error("Lỗi lấy sản phẩm:", err);
      setProducts([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setCurrentPage(0);
    if (categoryId) {
      navigate(`/categories/${categoryId}`);
    } else {
      navigate("/categories");
    }
  };

  return (
    <div style={styles.layout}>
      <aside style={styles.sidebar}>
        <h3 style={styles.filterTitle}>Filters</h3>
        <div style={styles.filterSection}>
          <h4 style={styles.subTitle}>Categories</h4>
          <ul style={styles.list}>
            <li
              style={!id ? styles.activeItem : styles.listItem}
              onClick={() => handleCategoryClick(null)}
            >
              All Products
            </li>
            {categories.map((cat) => (
              <li
                key={cat.id}
                style={
                  // So sánh id từ URL (string) với id từ API (number)
                  String(id) === String(cat.id)
                    ? styles.activeItem
                    : styles.listItem
                }
                onClick={() => handleCategoryClick(cat.id)}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main style={styles.mainContent}>
        <div style={{ position: "relative", minHeight: "400px" }}>
          <div
            style={{
              ...styles.grid,
              opacity: loading ? 0.4 : 1,
              transition: "opacity 0.2s ease",
            }}
          >
            {products.length > 0
              ? products.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    to={`/products/${p.id}`}
                  />
                ))
              : !loading && (
                  <div
                    style={{
                      textAlign: "center",
                      width: "100%",
                      padding: "50px",
                    }}
                  >
                    <p>Không tìm thấy sản phẩm nào trong danh mục này.</p>
                  </div>
                )}
          </div>

          {loading && (
            <div style={styles.loadingOverlay}>
              <span>Đang tải sản phẩm...</span>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(p) => setCurrentPage(p)}
          />
        )}
      </main>
    </div>
  );
};

const styles = {
  layout: {
    display: "flex",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "20px",
  },
  sidebar: {
    width: "250px",
    paddingRight: "30px",
    borderRight: "1px solid #eee",
  },
  filterTitle: { fontSize: "20px", fontWeight: "bold", marginBottom: "20px" },
  subTitle: { fontSize: "16px", color: "#666", marginBottom: "10px" },
  list: { listStyle: "none", padding: 0 },
  listItem: {
    padding: "10px 12px",
    cursor: "pointer",
    color: "#333",
    borderRadius: "4px",
    transition: "0.2s",
  },
  activeItem: {
    padding: "10px 12px",
    cursor: "pointer",
    color: "#ef4444",
    backgroundColor: "#fff1f1",
    fontWeight: "bold",
    borderRadius: "4px",
  },
  mainContent: { flex: 1, paddingLeft: "30px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "25px",
  },
  loadingOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.2rem",
    color: "#666",
  },
};

export default CategoryPage;
