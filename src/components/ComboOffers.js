
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from '../data/products';

function ComboOffers() {
  const { addToCart, cartItems } = useContext(CartContext);

  // Check if cart contains any ice cream
  const hasIceCream = cartItems && cartItems.some(item => item.category && item.category.toLowerCase().includes('icecream'));

  // Combo offer: if a person buys any ice cream, all chocolates are 10% off
  const chocolateProducts = products.filter(product => product.category && product.category.toLowerCase().includes('chocolate'));
  const comboProducts = chocolateProducts.map((product, idx) => ({
    id: 3000 + idx,
    name: product.name + " Combo Offer",
    items: [product.name],
    price: (product.price - product.price * 0.10).toFixed(0),
    image: product.image
  }));

  const handleAddCombo = (combo) => {
    addToCart({
      id: combo.id,
      name: combo.name,
      price: Number(combo.price),
      image: combo.image,
      category: "combo"
    });
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f1ff" }}>
      <h2>🎁 Combo Offers</h2>
      {hasIceCream ? (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {comboProducts.map((combo) => (
            <div key={combo.id} style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              backgroundColor: "#ffffff",
              width: "250px"
            }}>
              <img src={combo.image} alt={combo.name} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
              <h3>{combo.name}</h3>
              <ul>
                {combo.items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
              <p><strong>Combo Price: ₹{combo.price}</strong> <span style={{ color: '#52c41a', fontWeight: 600 }}>(10% off!)</span></p>
              <button onClick={() => handleAddCombo(combo)}>Add Combo to Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', color: '#d4380d', fontSize: 20, marginTop: 30 }}>
          <p>Add any ice cream to your cart to unlock 10% off on all chocolates!</p>
        </div>
      )}
    </div>
  );
}

export default ComboOffers;
