import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ item }) {
  const { addToCart } = useContext(CartContext);
  const navigate = require('react-router-dom').useNavigate();
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      {/* Combo offer label removed as per request */}
      <button onClick={() => {
        addToCart({ ...item, qty: 1 });
        navigate('/cart');
      }}>Add to Cart</button>
    </div>
  );
}


export default ProductCard;