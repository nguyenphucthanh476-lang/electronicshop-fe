const data = [
  // --- SMARTPHONES (Giữ nguyên vì đang hiển thị tốt) ---
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199.0,
    description: "Khung titan, Chip A17 Pro, nút Action Button mới nhất.",
    stockQuantity: 50,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png",
    category: { id: 1, name: "Smartphones" }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 1299.0,
    description: "Quyền năng Galaxy AI, Camera 200MP, bút S-Pen quyền lực.",
    stockQuantity: 45,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
    category: { id: 1, name: "Smartphones" }
  },
  {
    id: 3,
    name: "Xiaomi 14 Ultra",
    price: 990.0,
    description: "Thấu kính Leica huyền thoại, Snapdragon 8 Gen 3 siêu mạnh.",
    stockQuantity: 30,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-14-ultra_1_.png",
    category: { id: 1, name: "Smartphones" }
  },

  // --- LAPTOPS (Đổi sang ảnh Unsplash để không bị lỗi) ---
  {
    id: 4,
    name: "MacBook Pro 14 M3",
    price: 1599.0,
    description: "Hiệu năng đột phá với chip M3 Pro, màu Space Black sang trọng.",
    stockQuantity: 20,
    // Link ảnh mới (MacBook trên bàn làm việc)
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80",
    category: { id: 2, name: "Laptops" }
  },
  {
    id: 5,
    name: "Dell XPS 13 Plus",
    price: 1399.0,
    description: "Thiết kế tương lai, màn hình OLED cảm ứng, Intel Core Ultra 7.",
    stockQuantity: 15,
    // Link ảnh mới (Dell XPS màn hình sáng)
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600&q=80",
    category: { id: 2, name: "Laptops" }
  },
  {
    id: 6,
    name: "ASUS ROG Zephyrus G14",
    price: 1499.0,
    description: "Laptop Gaming mỏng nhẹ nhất, màn hình OLED 120Hz, RTX 4070.",
    stockQuantity: 10,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    category: { id: 2, name: "Laptops" }
  },

  // --- TABLETS ---
  {
    id: 7,
    name: "iPad Pro 12.9 M2",
    price: 1099.0,
    description: "Màn hình Liquid Retina XDR đỉnh cao, hỗ trợ Apple Pencil Hover.",
    stockQuantity: 25,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    category: { id: 3, name: "Tablets" }
  },
  {
    id: 8,
    name: "Samsung Galaxy Tab S9",
    price: 799.0,
    description: "Máy tính bảng Android tốt nhất, kháng nước IP68, màn hình 120Hz.",
    stockQuantity: 30,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=600&q=80",
    category: { id: 3, name: "Tablets" }
  },

  // --- AUDIO ---
  {
    id: 9,
    name: "AirPods Pro 2",
    price: 249.0,
    description: "Chống ồn chủ động gấp 2 lần, hộp sạc USB-C mới.",
    stockQuantity: 100,
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple-airpods-pro-2-usb-c_1_.png",
    category: { id: 4, name: "Audio" }
  },
  {
    id: 10,
    name: "Sony WH-1000XM5",
    price: 348.0,
    description: "Tai nghe chống ồn tốt nhất thế giới, pin 30 giờ.",
    stockQuantity: 60,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80",
    category: { id: 4, name: "Audio" }
  },

  // --- MONITORS ---
  {
    id: 11,
    name: "LG UltraGear 27GR75Q",
    price: 320.0,
    description: "Màn hình Gaming 2K, tấm nền IPS 165Hz, chuẩn màu điện ảnh.",
    stockQuantity: 40,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    category: { id: 5, name: "Monitors" }
  },

  // --- CAMERAS ---
  {
    id: 13,
    name: "Sony Alpha A7 IV",
    price: 2400.0,
    description: "Máy ảnh Hybrid chuẩn mực mới, cảm biến Full-frame 33MP.",
    stockQuantity: 10,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    category: { id: 6, name: "Cameras" }
  }
];

export default data;