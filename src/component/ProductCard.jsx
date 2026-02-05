import React from 'react';
import { Link } from 'react-router-dom';
import { formatVndFromUsd } from '../utils/currency';

function ProductCard({ product, to }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const formatCurrency = (price) => {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

  const styles = {
    card: {
      background: '#fff',
      borderRadius: 10,
      border: '1px solid #eee',
      boxShadow: isHovered ? '0 12px 24px rgba(0,0,0,0.08)' : 'none',
      overflow: 'hidden',
      cursor: 'pointer',
      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'transform 0.18s ease, box-shadow 0.18s ease',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
    },
    imageWrap: {
      height: 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f6f6f6',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: 14,
    },
    info: {
      padding: '12px 10px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      textAlign: 'center',
    },
    name: {
      fontSize: 13,
      fontWeight: 700,
      color: '#111',
      lineHeight: 1.25,
      minHeight: 32,
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
    },
    price: {
      fontSize: 13,
      fontWeight: 800,
      color: '#ef4444',
    },
  };

  return (
    <Link
      to={to}
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`View details for ${product?.name ?? 'product'}`}
    >
      <div style={styles.card}>
        <div style={styles.imageWrap}>
          <img src={product.image} alt={product.name} loading="lazy" style={styles.img} />
        </div>
        <div style={styles.info}>
          <div style={styles.name}>{product.name}</div>
          <div style={styles.price}>{formatCurrency(product.price)}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
