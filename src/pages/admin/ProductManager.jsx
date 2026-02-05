import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchName, setSearchName] = useState("");

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    stockQuantity: "",
    category: null,
  });

  const [editingId, setEditingId] = useState(null);

  // ================= GET ALL =================
  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/v1/admin/products");
      setProducts(res.data.result || []);
    } catch (err) {
      console.error("Fetch products failed", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ================= SEARCH =================
  const searchProduct = async () => {
    if (!searchName.trim()) {
      fetchProducts();
      return;
    }
    const res = await axios.get(
      `/api/v1/admin/products/search?name=${searchName}`
    );
    setProducts(res.data.result || []);
  };

  // ================= HANDLE FORM =================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= CREATE =================
  const handleCreate = async () => {
    await axios.post("/api/v1/admin/products", form);
    fetchProducts();
    resetForm();
  };

  // ================= UPDATE =================
  const handleUpdate = async () => {
    await axios.put(`/api/v1/admin/products/${editingId}`, form);
    fetchProducts();
    resetForm();
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await axios.delete(`/api/v1/admin/products/${id}`);
    fetchProducts();
  };

  // ================= EDIT =================
  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      price: product.price,
      description: product.description,
      stockQuantity: product.stockQuantity,
      category: product.category,
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({
      name: "",
      price: "",
      description: "",
      stockQuantity: "",
      category: null,
    });
  };

  // ================= UI =================
  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Product Management</h2>

      <input
        placeholder="Search by name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button onClick={searchProduct}>Search</button>

      <hr />

      <h3>{editingId ? "Update Product" : "Create Product"}</h3>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
      <input
        name="stockQuantity"
        placeholder="Stock"
        value={form.stockQuantity}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      {editingId ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleCreate}>Create</button>
      )}
      <button onClick={resetForm}>Clear</button>

      <hr />

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.stockQuantity}</td>
              <td>
                <button onClick={() => handleEdit(p)}>Edit</button>
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProduct;
