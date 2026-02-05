import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, X } from "lucide-react";
import { useAuth } from "../component/AuthContext";
import "../App.css";

function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && keyword.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(keyword)}`);
      setIsSearchOpen(false);
      setKeyword("");
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogoutClick = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate("/");
  };

  const linkBase = {
    textDecoration: "none",
    color: "#111",
    cursor: "pointer",
    padding: "6px 8px",
    borderRadius: 8,
    transition: "background-color 0.15s ease, color 0.15s ease",
  };

  return (
    <>
      <div className="NavBar">
        <Link
          to="/"
          style={{ display: "inline-flex", alignItems: "center" }}
          aria-label="Go to Home"
        >
          <img
            src="https://i.pinimg.com/1200x/5c/a4/a0/5ca4a06bebe717b1459b154b436fe147.jpg"
            alt="Logo"
            style={{ height: "40px" }} 
          />
        </Link>
        <div style={{ display: "flex", justifyContent: "space-around", gap: "15px", fontSize: "18px", fontWeight: "bold" }}>
          <Link
            to="/"
            style={hovered === "shop" ? { ...linkBase, backgroundColor: "#f3f4f6" } : linkBase}
            onMouseEnter={() => setHovered("shop")}
            onMouseLeave={() => setHovered(null)}
          >
            SHOP
          </Link>
          <Link
            to="/products"
            style={hovered === "products" ? { ...linkBase, backgroundColor: "#f3f4f6" } : linkBase}
            onMouseEnter={() => setHovered("products")}
            onMouseLeave={() => setHovered(null)}
          >
            PRODUCTS
          </Link>
          <Link
            to="/categories"
            style={hovered === "categories" ? { ...linkBase, backgroundColor: "#f3f4f6" } : linkBase}
            onMouseEnter={() => setHovered("categories")}
            onMouseLeave={() => setHovered(null)}
          >
            CATEGORIES
          </Link>
          <Link
            to="/about-us"
            style={hovered === "about" ? { ...linkBase, backgroundColor: "#f3f4f6" } : linkBase}
            onMouseEnter={() => setHovered("about")}
            onMouseLeave={() => setHovered(null)}
          >
            ABOUT US
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "15px", position: "relative" }}>
          {isSearchOpen && (
            <div style={{
              position: "absolute", right: "70px", top: "50%", transform: "translateY(-50%)",
              display: "flex", alignItems: "center", background: "#fff", border: "1px solid #ddd",
              borderRadius: "20px", padding: "6px 10px", zIndex: 1000,
            }}>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={handleSearchSubmit}
                style={{ border: "none", outline: "none", width: "170px" }}
                autoFocus
              />
              <X size={16} style={{ cursor: "pointer", marginLeft: "6px" }} onClick={() => { setIsSearchOpen(false); setKeyword(""); }} />
            </div>
          )}

          <div onClick={() => setIsSearchOpen(!isSearchOpen)} style={{ cursor: "pointer" }}>
            {isSearchOpen ? <X size={20} /> : <Search size={20} />}
          </div>
          
          <div style={{ cursor: "pointer" }}>
            <ShoppingCart />
          </div>

          <div style={{ position: "relative" }} ref={userMenuRef}>
            <div
              onClick={() => setIsUserMenuOpen((s) => !s)}
              style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}
            >
              <User />
            </div>

            <div style={{
              position: "absolute", right: 0, marginTop: 8, background: "#fff",
              border: "1px solid #e5e7eb", borderRadius: 8, boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              minWidth: 160, zIndex: 1200,
              transform: isUserMenuOpen ? "translateY(0)" : "translateY(-8px)",
              opacity: isUserMenuOpen ? 1 : 0,
              transition: "opacity 180ms ease, transform 180ms ease",
              pointerEvents: isUserMenuOpen ? "auto" : "none",
              visibility: isUserMenuOpen ? "visible" : "hidden",
            }}>
              {!user ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Link to="/login" style={{ padding: "10px 14px", textDecoration: "none", color: "#111" }} onClick={() => setIsUserMenuOpen(false)}>Login</Link>
                  <Link to="/register" style={{ padding: "10px 14px", textDecoration: "none", color: "#111" }} onClick={() => setIsUserMenuOpen(false)}>Register</Link>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <button
                    onClick={handleLogoutClick}
                    style={{ padding: "10px 14px", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", color: "red" }}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;