import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "../../component/Navbar";
import { useNavigate } from "react-router-dom";
import data from "../../data/data.js";
import ProductCard from "../../component/ProductCard";
import { formatVndFromUsd } from "../../utils/currency";

import panelLaptop from "../../assets/panel-laptop.png";
import panelPhone from "../../assets/panel-phone.png";
import panelHeadphones from "../../assets/panel-headphones.png";
import panelMonitor from "../../assets/panel-monitor.png";

import Pagination from "../../component/Pagination";
import {
  getProductsByCategory,
  getAllProducts,
  getAllCategories,
} from "../../services/productService";
import Footer from "../../component/Footer";

function Homepage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [hoveredHighlight, setHoveredHighlight] = React.useState(null);
  const [hoveredHeroBtn, setHoveredHeroBtn] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const cateData = await getAllCategories();
        setCategories(cateData || []);
      } catch (error) {
        console.error("Lỗi lấy danh mục:", error);
      }
    };
    fetchInitialData();
  }, []);
  useEffect(() => {
    if (categories.length === 0) return;
    fetchProducts(activeCategory, currentPage);
  }, [activeCategory, currentPage, categories]);

  const fetchProducts = async (category, page) => {
    setLoading(true);
    try {
      let result;
      if (category === "All") {
        result = await getAllProducts(page, pageSize);
      } else {
        const targetCate = categories.find((c) => c.name === category);
        if (targetCate) {
          result = await getProductsByCategory(targetCate.id, page, pageSize);
        }
      }
      setProducts(result?.content || []);
      setTotalPages(result?.totalPages || 0);
    } catch (error) {
      console.error("Lỗi lấy sản phẩm:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (categoryName) => {
    setActiveCategory(categoryName);
    setCurrentPage(0);
  };

  const styles = {
    homepage: {
      background: "#fff",
    },
    carouselWrapper: {
      maxWidth: 1500,
      margin: "40px auto",
      borderRadius: 25,
      overflow: "hidden",
      paddingBottom: 30,
      transform: "translateZ(0)",
    },
    carouselSlide: {
      height: 500,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f4f6f8",
    },
    carouselContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: 1200,
      padding: "0 50px",
      gap: 50,
    },
    carouselText: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      textAlign: "left",
      zIndex: 2,
    },
    heroLabel: {
      fontSize: "3.5rem",
      fontWeight: 800,
      color: "#2c3e50",
      margin: "0 0 15px 0",
      lineHeight: 1.1,
      textTransform: "uppercase",
      letterSpacing: "-1px",
    },
    heroTitle: {
      fontSize: "1.1rem",
      color: "#555",
      fontWeight: 400,
      margin: "0 0 30px 0",
      maxWidth: "90%",
      lineHeight: 1.6,
    },
    btnShop: {
      padding: "14px 35px",
      backgroundColor: hoveredHeroBtn ? "#c0392b" : "#e74c3c",
      color: "white",
      border: "none",
      borderRadius: 5,
      fontSize: "1rem",
      fontWeight: 600,
      cursor: "pointer",
      boxShadow: hoveredHeroBtn
        ? "0 6px 20px rgba(231, 76, 60, 0.4)"
        : "0 4px 15px rgba(231, 76, 60, 0.3)",
      transform: hoveredHeroBtn ? "translateY(-3px)" : "translateY(0)",
      transition: "all 0.3s ease",
    },
    carouselImageWrapper: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      minHeight: 320,
    },
    carouselImage: {
      display: "block",
      width: "min(520px, 100%)",
      height: "auto",
      maxHeight: 450,
      objectFit: "contain",
      filter: "drop-shadow(10px 20px 30px rgba(0,0,0,0.15))",
      transition: "transform 0.5s ease",
    },

    highlightRow: {
      margin: "22px auto 0",
      maxWidth: 1200,
      padding: "0 20px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18,
    },
    highlightCard: {
      borderRadius: 14,
      padding: "18px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 130,
      border: "1px solid rgba(0,0,0,0.04)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
      background: "#f7f7f7",
      transition: "transform 0.18s ease, box-shadow 0.18s ease",
    },
    highlightText: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
    },
    highlightTitle: {
      fontWeight: 700,
      color: "#222",
      fontSize: 16,
    },
    highlightSubtitle: {
      fontWeight: 800,
      color: "#222",
      fontSize: 18,
      lineHeight: 1.1,
    },
    highlightMeta: {
      fontSize: 12,
      color: "#666",
    },
    highlightBtn: {
      marginTop: 6,
      width: "fit-content",
      padding: "10px 16px",
      border: "none",
      borderRadius: 999,
      background: "#ef4444",
      color: "#fff",
      fontWeight: 700,
      cursor: "pointer",
      transition: "transform 0.18s ease, background-color 0.18s ease",
    },
    highlightImage: {
      flex: "0 0 auto",
      width: 120,
      minWidth: 120,
      display: "flex",
      justifyContent: "flex-end",
    },
    highlightImg: {
      display: "block",
      width: 120,
      height: 95,
      objectFit: "contain",
      filter: "drop-shadow(10px 18px 24px rgba(0,0,0,0.12))",
    },

    allPackage: {
      maxWidth: 1200,
      margin: "34px auto 60px",
      padding: "0 20px",
    },
    sectionHeader: {
      textAlign: "center",
      marginBottom: 18,
    },
    sectionTitle: {
      fontSize: 26,
      fontWeight: 800,
      color: "#111",
      margin: "0 0 10px 0",
    },
    sectionUnderline: {
      width: 110,
      height: 4,
      borderRadius: 999,
      background: "#111",
      margin: "0 auto",
    },
    categoryTabs: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      justifyContent: "center",
      margin: "18px 0 22px",
      flexWrap: "wrap",
    },
    tab: {
      border: "none",
      background: "transparent",
      color: "#666",
      fontWeight: 700,
      cursor: "pointer",
      padding: "8px 10px",
      borderBottom: "2px solid transparent",
    },
    tabActive: {
      color: "#ef4444",
      borderBottom: "2px solid #ef4444",
    },

    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
      gap: 22,
      overflowX: "auto",
      paddingBottom: 10,
    },
    productCard: {
      background: "#fff",
      borderRadius: 10,
      border: "1px solid #eee",
      boxShadow: "none",
      overflow: "hidden",
      cursor: "pointer",
    },
    productImage: {
      height: 160,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f6f6f6",
    },
    productImg: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: 14,
    },
    productInfo: {
      padding: "12px 10px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      textAlign: "center",
    },
    productName: {
      fontSize: 13,
      fontWeight: 700,
      color: "#111",
      lineHeight: 1.25,
      minHeight: 32,
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
    },
    productPrice: {
      fontSize: 13,
      fontWeight: 800,
      color: "#ef4444",
    },
    loadingText: {
      textAlign: "center",
      fontSize: "18px",
      color: "#666",
      padding: "100px 0",
      width: "100%",
      gridColumn: "1 / -1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "200px",
    },
  };

  const responsive = {
    all: { breakpoint: { max: 4000, min: 0 }, items: 1 },
  };
  const formatPrice = (value) => formatVndFromUsd(value);
  const getCategoryStats = (categoryName) => {
    const items = data.filter((p) => p?.category?.name === categoryName);
    const prices = items
      .map((p) => p.price)
      .filter((p) => typeof p === "number");
    if (prices.length === 0) return { min: null, max: null, count: 0 };
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
      count: items.length,
    };
  };

  const bannerImages = [
    {
      id: 1,
      url: panelLaptop,
      title: "M2 Pro chip power, 22h battery life, Retina XDR",
      label: "Macbook M2 Pro",
    },
    {
      id: 2,
      url: panelPhone,
      title:
        "A19 Bionic chip, 48MP Tetraprism zoom, bezel-less titanium design",
      label: "iPhone 17 Pro Max",
    },
    {
      id: 3,
      url: panelHeadphones,
      title: "Active Noise Cancellation with personalized spatial audio",
      label: "AirPods 4",
    },
    {
      id: 4,
      url: panelMonitor,
      title: "4K UHD IPS display, 99% sRGB for creators",
      label: "LG Monitor",
    },
  ];

  const highlightCards = [
    {
      id: "Tablets",
      title: "Tablets",
      subtitle: "Smartphones",
      image: panelPhone,
      accent: "pink",
      categories: ["Tablets", "Smartphones"],
    },
    {
      id: "Hottest",
      title: "Shop The",
      subtitle: "Hottest Products",
      image: panelLaptop,
      accent: "blue",
      categories: [],
    },
    {
      id: "Monitors",
      title: "Monitors",
      subtitle: "All Package",
      image: panelMonitor,
      accent: "green",
      categories: ["Monitors"],
    },
  ];

  return (
    <div style={styles.homepage}>
      <div style={styles.carouselWrapper}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          showDots={true}
          arrows={false}
        >
          {bannerImages.map((image) => (
            <div key={image.id} style={styles.carouselSlide}>
              <div style={styles.carouselContent}>
                <div style={styles.carouselText}>
                  <h1 style={styles.heroLabel}>{image.label}</h1>

                  <p style={styles.heroTitle}>{image.title}</p>

                  <div className="btn-wrapper">
                    <button
                      style={styles.btnShop}
                      onMouseEnter={() => setHoveredHeroBtn(true)}
                      onMouseLeave={() => setHoveredHeroBtn(false)}
                      type="button"
                      onClick={() => navigate("/products")}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>

                <div style={styles.carouselImageWrapper}>
                  <img
                    src={image.url}
                    alt={image.label}
                    style={styles.carouselImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div style={styles.highlightRow}>
          {highlightCards.map((card) => {
            const firstCategory = card.categories?.[0];
            const stats = firstCategory
              ? getCategoryStats(firstCategory)
              : null;
            const priceText =
              stats && stats.min != null
                ? `Giá từ ${formatPrice(stats.min)}`
                : "Khám phá ngay";

            const accentBg =
              card.accent === "pink"
                ? { background: "#fdecec" }
                : card.accent === "blue"
                  ? { background: "#eaf3ff" }
                  : { background: "#eaf8f0" };

            const isHovered = hoveredHighlight === card.id;
            const hoverStyle = isHovered
              ? {
                  transform: "translateY(-4px)",
                  boxShadow: "0 14px 26px rgba(0,0,0,0.08)",
                }
              : {
                  transform: "translateY(0)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                };

            return (
              <div
                key={card.id}
                style={{
                  ...styles.highlightCard,
                  ...accentBg,
                  ...hoverStyle,
                }}
                onMouseEnter={() => setHoveredHighlight(card.id)}
                onMouseLeave={() => setHoveredHighlight(null)}
              >
                <div style={styles.highlightText}>
                  <div style={styles.highlightTitle}>{card.title}</div>
                  <div style={styles.highlightSubtitle}>{card.subtitle}</div>
                  <div style={styles.highlightMeta}>{priceText}</div>
                  <button
                    style={styles.highlightBtn}
                    type="button"
                    onClick={() => {
                      if (card.categories?.length)
                        setActiveCategory(card.categories[0]);
                      navigate("/products");
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.backgroundColor = "#dc2626";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.backgroundColor = "#ef4444";
                    }}
                  >
                    Shop Now
                  </button>
                </div>
                <div style={styles.highlightImage}>
                  <img
                    src={card.image}
                    alt={card.subtitle}
                    style={styles.highlightImg}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <section style={styles.allPackage} id="all-package">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>All Package</h2>
            <div style={styles.sectionUnderline} />
          </div>

          <div
            style={styles.categoryTabs}
            role="tablist"
            aria-label="Product categories"
          >
            <button
              style={
                activeCategory === "All"
                  ? { ...styles.tab, ...styles.tabActive }
                  : styles.tab
              }
              onClick={() => handleTabChange("All")}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                style={
                  cat.name === activeCategory
                    ? { ...styles.tab, ...styles.tabActive }
                    : styles.tab
                }
                onClick={() => handleTabChange(cat.name)}
                role="tab"
                aria-selected={cat.name === activeCategory}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div style={{ position: "relative" }}>
            <div style={styles.productGrid}>
              {products.length > 0
                ? products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      to={`/products/${product.id}`}
                    />
                  ))
                : !loading && (
                    <div style={styles.loadingText}>Không có sản phẩm nào.</div>
                  )}
            </div>

            {loading && (
              <div style={styles.loadingOverlay}>Đang tải sản phẩm...</div>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
