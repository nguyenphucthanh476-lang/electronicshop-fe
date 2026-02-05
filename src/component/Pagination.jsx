import React from "react";

const styles = {
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "30px",
    marginBottom: "20px",
  },
  pageBtn: {
    padding: "8px 16px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    background: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.2s",
  },
  activePageBtn: {
    background: "#ef4444",
    color: "#fff",
    borderColor: "#ef4444",
  },
  disabledBtn: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
};

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(
        <button
          key={i}
          style={{
            ...styles.pageBtn,
            ...(currentPage === i ? styles.activePageBtn : {}),
          }}
          onClick={() => onPageChange(i)}
        >
          {i + 1}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div style={styles.pagination}>
      <button
        style={{
          ...styles.pageBtn,
          ...(currentPage === 0 ? styles.disabledBtn : {}),
        }}
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {renderPageNumbers()}

      <button
        style={{
          ...styles.pageBtn,
          ...(currentPage === totalPages - 1 ? styles.disabledBtn : {}),
        }}
        disabled={currentPage === totalPages - 1}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
