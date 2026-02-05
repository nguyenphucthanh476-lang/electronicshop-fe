import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../component/Navbar.jsx';
import { getProductById } from '../../services/productService.js';
import Footer from '../../component/Footer';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);

  // Hàm format tiền tệ VNĐ
  const formatCurrency = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = Number(id);
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // --- PHẦN CSS INLINE ---
  const styles = {
    page: {
      background: '#fff',
      minHeight: '100vh',
    },
    container: {
      maxWidth: 1200,
      margin: '24px auto 60px',
      padding: '0 20px',
    },
    back: {
      display: 'inline-block',
      marginBottom: 24,
      color: '#666',
      fontWeight: 600,
      textDecoration: 'none',
      fontSize: '16px',
    },
    // Layout chính: Chia 2 cột
    productLayout: {
      display: 'flex',
      gap: '50px',
      alignItems: 'flex-start',
      flexWrap: 'wrap', // Để responsive trên màn hình nhỏ
    },
    // Cột trái: Chứa ảnh
    leftColumn: {
      flex: '1',
      minWidth: '350px',
      border: '1px solid #eee',
      borderRadius: '16px',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fafafa',
    },
    productImage: {
      width: '100%',
      height: 'auto',
      maxHeight: '500px',
      objectFit: 'contain',
    },
    // Cột phải: Chứa thông tin
    rightColumn: {
      flex: '1',
      minWidth: '350px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    productName: {
      fontSize: '32px',
      fontWeight: '800',
      color: '#111',
      margin: '0 0 10px 0',
      lineHeight: 1.2,
    },
    categoryBadge: {
      display: 'inline-block',
      background: '#f3f4f6',
      color: '#4b5563',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '600',
      width: 'fit-content',
    },
    productPrice: {
      fontSize: '28px',
      fontWeight: '900',
      color: '#ef4444', // Màu đỏ cho giá
      margin: 0,
    },
    productDesc: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#555',
      margin: 0,
    },
    addToCartBtn: {
      marginTop: '20px',
      padding: '16px 32px',
      background: isButtonHovered ? '#dc2626' : '#ef4444',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '800',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 6px -1px rgba(239, 68, 68, 0.2)',
      width: 'fit-content',
    },
    // Style cho phần Loading và Not Found
    centerBox: {
      textAlign: 'center',
      padding: '60px 20px',
      background: '#f9fafb',
      borderRadius: '12px',
    }
  };

  return (
  <>
    <div style={styles.page}>
     

      <div style={styles.container}>
        <Link to="/products" style={styles.back}>
          ← Quay lại danh sách
        </Link>

        {loading ? (
          <div style={styles.centerBox}>Đang tải sản phẩm...</div>
        ) : !product ? (
          <div style={styles.centerBox}>
            <h2 style={{margin: 0, color: '#333'}}>Không tìm thấy sản phẩm</h2>
            <p style={{color: '#666'}}>Sản phẩm bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          </div>
        ) : (
          /* Giao diện chi tiết sản phẩm 2 cột */
          <div style={styles.productLayout}>
            
            {/* Cột Trái: Ảnh */}
            <div style={styles.leftColumn}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={styles.productImage}
                onError={(e) => {e.target.src = 'https://via.placeholder.com/500x500?text=No+Image'}}
              />
            </div>

            {/* Cột Phải: Thông tin */}
            <div style={styles.rightColumn}>
              {/* Category (Nếu có) */}
              {product.category && (
                <span style={styles.categoryBadge}>{product.category.name}</span>
              )}

              {/* Tên sản phẩm */}
              <h1 style={styles.productName}>{product.name}</h1>

              {/* Giá tiền */}
              <p style={styles.productPrice}>
                {formatCurrency(product.price)}
              </p>

              {/* Mô tả */}
              <div style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '20px 0'}}>
                <h3 style={{fontSize: '18px', marginBottom: '10px'}}>Mô tả sản phẩm:</h3>
                <p style={styles.productDesc}>{product.description}</p>
              </div>

              {/* Nút Mua Hàng */}
              <button 
                style={styles.addToCartBtn}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                onClick={() => alert(`Đã thêm ${product.name} vào giỏ hàng!`)}
              >
                Thêm vào giỏ hàng
              </button>
            </div>

          </div>
        )}
      </div>
    </div>

   
    </>
  );
}

export default ProductDetail;