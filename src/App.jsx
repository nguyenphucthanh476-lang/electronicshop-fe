// src/App.jsx
import './App.css'
import { Routes, Route } from 'react-router-dom'

// ===== COMMON =====
import Navbar from './component/Navbar'
import Footer from './component/Footer'

// ===== PUBLIC PAGES =====
import Homepage from './pages/homepage/Homepage'
import Products from './pages/products/Products'
import ProductDetail from './pages/productDetail/ProductDetail'
import CategoryPage from './pages/categories/CategoryPage'
import AboutUs from './pages/aboutus/AboutUs'

// ===== AUTH =====
import Login from './pages/Login'
import Register from './pages/Register'

// ===== ADMIN =====
import AdminLayout from './pages/admin/AdminLayout'
import AdminHome from './pages/admin/AdminHome'
import AdminProducts from './pages/admin/AdminProducts'
import AdminCategories from './pages/admin/AdminCategories'
import ProductManager from './pages/admin/ProductManager'
import CategoryManager from './pages/admin/CategoryManager'

// ===== SECURITY =====
import ProtectedRoute from './component/ProtectedRoute'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ flex: 1 }}>
        <Routes>

          {/* ===== PUBLIC ===== */}
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/categories/:id" element={<CategoryPage />} />
          <Route path="/about-us" element={<AboutUs />} />

          {/* ===== AUTH ===== */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ===== ADMIN (ADMIN ONLY) ===== */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="ADMIN">
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminHome />} />

            {/* VIEW */}
            <Route path="products" element={<AdminProducts />} />
            <Route path="categories" element={<AdminCategories />} />

            {/* MANAGE */}
            <Route path="manage-products" element={<ProductManager />} />
            <Route path="manage-categories" element={<CategoryManager />} />
          </Route>

        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
