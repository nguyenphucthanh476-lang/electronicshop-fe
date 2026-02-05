import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../component/Navbar.jsx";
import ProductCard from "../../component/ProductCard.jsx";
import {
  getAllProducts,
  searchProducts,
} from "../../services/productService.js";
import Pagination from "../../component/Pagination.jsx";
import Footer from "../../component/Footer";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search") || "";
  const prevSearchTermRef = React.useRef("");

  useEffect(() => {
    const isSearchTermChanged = prevSearchTermRef.current !== searchTerm;
    prevSearchTermRef.current = searchTerm;
    if (isSearchTermChanged && currentPage !== 0) {
      setCurrentPage(0);
    } else {
      fetchData();
    }
  }, [searchTerm, currentPage]);

  const fetchData = async () => {
    setLoading(true);
    try {
      let result;
      if (searchTerm) {
        result = await searchProducts(searchTerm, currentPage, pageSize);
      } else {
        result = await getAllProducts(currentPage, pageSize);
      }
      if (result && result.content) {
        setProducts(result.content);
        setTotalPages(result.totalPages || 0);
      } else {
        setProducts([]);
        setTotalPages(0);
      }
    } catch (error) {
      console.error("Lỗi:", error);
      setProducts([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };
  const styles = {
    page: {
      background: "#fff",
      minHeight: "100vh",
    },
    container: {
      maxWidth: 1200,
      margin: "24px auto 60px",
      padding: "0 20px",
    },
    header: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 18,
    },
    title: {
      fontSize: 28,
      fontWeight: 900,
      margin: 0,
      color: "#111",
    },
    subtitle: {
      margin: 0,
      color: "#666",
      fontWeight: 600,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
      gap: 22,
      overflowX: "auto",
      paddingBottom: 10,
    },
  };

  return (
    <>
      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>
              {searchTerm ? `Results for "${searchTerm}"` : "Products"}
            </h1>
          </div>

          {loading ? (
            <p>Đang tải...</p>
          ) : (
            <>
              <div style={styles.grid}>
                {products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      to={`/products/${product.id}`}
                    />
                  ))
                ) : (
                  <div
                    style={{
                      gridColumn: "1 / -1",
                      textAlign: "center",
                      padding: "40px",
                    }}
                  >
                    <h3>
                      {searchTerm
                        ? `No results found for "${searchTerm}"`
                        : "No products available"}
                    </h3>
                  </div>
                )}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
