import { useEffect, useState } from "react";
import "./css/App.css";
import Navbar from "./Navbar";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="app-container">
      <Navbar />

      <div className="container">
        <h1 className="title">Daftar Produk</h1>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <h2 className="product-name">{product.nama}</h2>
              <p className="product-description">{product.deskripsi}</p>
              <p className="product-price">Rp {product.harga}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
