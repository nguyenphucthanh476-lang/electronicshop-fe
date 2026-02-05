// src/pages/admin/AdminHome.jsx
const AdminHome = () => {
  return (
    <div>
      <h1>📊 Admin Dashboard</h1>
      <p>Chào mừng bạn đến trang quản trị</p>

      <div style={styles.cards}>
        <div style={styles.card}>📦 Products</div>
        <div style={styles.card}>🗂 Categories</div>
        <div style={styles.card}>👤 Users (sau này)</div>
      </div>
    </div>
  );
};

const styles = {
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
    marginTop: 30,
  },
  card: {
    background: "#fff",
    padding: 30,
    borderRadius: 14,
    boxShadow: "0 10px 25px rgba(0,0,0,.05)",
    fontWeight: 800,
    fontSize: 18,
  },
};

export default AdminHome;
