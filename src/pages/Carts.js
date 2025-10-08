import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);

  // Combo offer: if cart contains any ice cream, show one chocolate at 10% off in the cart
  let hasIceCream = cartItems.some(item => item.category && item.category.toLowerCase().includes('icecream'));
  let total = 0;
  // ...existing code...
  cartItems.forEach(item => {
    total += item.price * item.qty;
  });
  // Combo offer: apply 10% off to one ice cream and one chocolate (lowest price of each) if both are present
  let hasChocolate = cartItems.some(item => item.category && item.category.toLowerCase().includes('chocolate'));
  let comboIceCream = null;
  let comboChocolate = null;
  if (hasIceCream && hasChocolate) {
    const iceCreamsInCart = cartItems.filter(item => item.category && item.category.toLowerCase().includes('icecream'));
    const chocolatesInCart = cartItems.filter(item => item.category && item.category.toLowerCase().includes('chocolate'));
    if (iceCreamsInCart.length > 0) {
      comboIceCream = iceCreamsInCart.reduce((min, item) => item.price < min.price ? item : min, iceCreamsInCart[0]);
      total -= comboIceCream.price * 0.10 * comboIceCream.qty;
    }
    if (chocolatesInCart.length > 0) {
      comboChocolate = chocolatesInCart.reduce((min, item) => item.price < min.price ? item : min, chocolatesInCart[0]);
      total -= comboChocolate.price * 0.10 * comboChocolate.qty;
    }
  }

  
  const hasVanillaIceCream = cartItems.some(item => item.name && item.name.toLowerCase().includes("vanilla ice cream"));
  const hasComboDarkChocolate = cartItems.some(item => item.id === 20001); 
  const darkChocolateCombo = {
    id: 20001,
    name: "Dark Chocolate (Combo Offer)",
    price: 80,
    image: "http://www.bestherbalhealth.com/wp-content/uploads/2015/02/Health-Benefits-of-Dark-Chocolate.jpg",
    category: "chocolate"
  };

  return (
    <div className="cart-container" style={{ maxWidth: 800, margin: "40px auto", background: "linear-gradient(120deg,#ffe29f 0%,#fbecc4 100%)", borderRadius: 20, boxShadow: "0 4px 24px rgba(0,0,0,0.10)", padding: 40 }}>
      <h2 style={{ textAlign: "center", marginBottom: 36, color: "#d4380d", fontSize: 32, fontWeight: 700, letterSpacing: 1 }}>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", color: "#888", fontSize: 20, padding: 40 }}>
          <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty Cart" style={{ width: 80, marginBottom: 16, opacity: 0.7 }} />
          <p>No items in cart.</p>
        </div>
      ) : (
        <div>
          {hasVanillaIceCream && !hasComboDarkChocolate && (
            <div style={{ background: "linear-gradient(90deg,#e0e7ff 0%,#fff1f0 100%)", borderRadius: 12, padding: 20, marginBottom: 28, textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
              <h4 style={{ margin: 0, fontSize: 22, color: "#141414" }}>🎉 Combo Offer!</h4>
              <p style={{ margin: "10px 0", fontSize: 17 }}>Buy <b>Vanilla Ice Cream</b> and get <b>Dark Chocolate</b> for just <span style={{ color: "#ff4d4f", fontWeight: 600 }}>₹80</span>!</p>
              <button onClick={() => addToCart(darkChocolateCombo)} style={{ background: "#d4380d", color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", cursor: "pointer", fontWeight: 600, fontSize: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>Add Combo Dark Chocolate</button>
            </div>
          )}
          <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", padding: 24 }}>
            {cartItems.map((item) => (
              <div key={item.id} style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #f0f0f0", padding: "22px 0" }}>
                <img src={item.image} alt={item.name} style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 14, marginRight: 32, boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: "0 0 10px 0", color: "#222", fontSize: 20 }}>{item.name}</h4>
                  <div style={{ display: "flex", alignItems: "center", marginBottom: 10, gap: 12 }}>
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => {
                        if (item.qty > 1) {
                          addToCart({ ...item, qty: item.qty - 1, updateQty: true });
                        } else {
                          removeFromCart(item.id);
                        }
                      }}
                      style={{
                        width: 38,
                        height: 38,
                        fontSize: 22,
                        borderRadius: "50%",
                        border: "none",
                        background: "#f0f0f0",
                        color: "#d4380d",
                        fontWeight: 700,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                        cursor: "pointer",
                        transition: "background 0.2s"
                      }}
                    >-</button>
                    <input
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={e => {
                        const value = Math.max(1, Number(e.target.value));
                        addToCart({ ...item, qty: value, updateQty: true });
                      }}
                      style={{
                        width: 54,
                        height: 38,
                        textAlign: "center",
                        borderRadius: 10,
                        border: "1.5px solid #d4380d",
                        fontSize: 20,
                        fontWeight: 600,
                        color: "#222",
                        background: "#f8fafc",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.05)"
                      }}
                    />
                    <button
                      aria-label="Increase quantity"
                      onClick={() => addToCart({ ...item, qty: item.qty + 1, updateQty: true })}
                      style={{
                        width: 38,
                        height: 38,
                        fontSize: 22,
                        borderRadius: "50%",
                        border: "none",
                        background: "#f0f0f0",
                        color: "#52c41a",
                        fontWeight: 700,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                        cursor: "pointer",
                        transition: "background 0.2s"
                      }}
                    >+</button>
                  </div>
                  <p style={{ margin: "6px 0 0 0", color: "#555", fontSize: 17 }}>
                    {(comboIceCream && item.id === comboIceCream.id) ? (
                      <span>
                        Price: <span style={{ textDecoration: 'line-through', color: '#888' }}>₹{item.price}</span> × {item.qty}<br />
                        Combo Offer Price: <span style={{ color: '#d4380d', fontWeight: 600 }}>₹{(item.price - item.price * 0.10).toFixed(0)}</span> × {item.qty} = <b>₹{((item.price - item.price * 0.10) * item.qty).toFixed(0)}</b>
                        <span style={{ color: '#52c41a', fontWeight: 600, marginLeft: 8 }}>(Combo Offer: 10% off!)</span>
                      </span>
                    ) : (comboChocolate && item.id === comboChocolate.id) ? (
                      <span>
                        Price: <span style={{ textDecoration: 'line-through', color: '#888' }}>₹{item.price}</span> × {item.qty}<br />
                        Combo Offer Price: <span style={{ color: '#d4380d', fontWeight: 600 }}>₹{(item.price - item.price * 0.10).toFixed(0)}</span> × {item.qty} = <b>₹{((item.price - item.price * 0.10) * item.qty).toFixed(0)}</b>
                        <span style={{ color: '#52c41a', fontWeight: 600, marginLeft: 8 }}>(Combo Offer: 10% off!)</span>
                      </span>
                    ) : (
                      <span>
                        Price: ₹{item.price} × {item.qty} = <b>₹{item.price * item.qty}</b>
                      </span>
                    )}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ background: "#ff4d4f", color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", cursor: "pointer", fontWeight: 600, fontSize: 16, marginLeft: 18, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>Remove</button>
              </div>
            ))}
          </div>
          <h3 style={{ textAlign: "right", marginTop: 36, color: "#222", fontSize: 26, fontWeight: 700, letterSpacing: 1 }}>Total: ₹{total}</h3>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 32 }}>
            <button
              style={{
                background: "linear-gradient(90deg,#d4380d 0%,#ffb347 100%)",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "16px 38px",
                fontWeight: 700,
                fontSize: 20,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                transition: "background 0.2s"
              }}
              onMouseEnter={() => window.location.href = '/payment'}
            >Proceed to Payment</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
