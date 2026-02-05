// src/pages/admin/AdminLayout.jsx
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div style={styles.layout}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>ADMIN</h2>

        <NavLink to="/admin" style={styles.link}>🏠 Dashboard</NavLink>

        <hr />

        <NavLink to="/admin/products" style={styles.link}>
          📦 Xem Products
        </NavLink>
        <NavLink to="/admin/categories" style={styles.link}>
          🗂 Xem Categories
        </NavLink>

        <hr />

        <NavLink to="/admin/manage-products" style={styles.link}>
          ✏️ Quản lý Products
        </NavLink>
        <NavLink to="/admin/manage-categories" style={styles.link}>
          ✏️ Quản lý Categories
        </NavLink>
      </aside>

      <main style={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

const styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    background: "#f4f6f8",
  },
  sidebar: {
    width: 260,
    background: "#111827",
    color: "#fff",
    padding: 20,
  },
  logo: {
    marginBottom: 30,
    fontWeight: 900,
  },
  link: {
    display: "block",
    padding: "12px 10px",
    color: "#e5e7eb",
    textDecoration: "none",
    borderRadius: 6,
    marginBottom: 6,
  },
  content: {
    flex: 1,
    padding: 30,
  },
};

export default AdminLayout;
