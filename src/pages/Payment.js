import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Payment() {
  const [showPassword, setShowPassword] = React.useState(false);
  //const [password, setPassword] = React.useState("");
  const [enteredPassword, setEnteredPassword] = React.useState("");
  const correctPassword = "1234"; // Demo password
  //const [method, setMethod] = React.useState("");
  const [card, setCard] = React.useState({ number: "", name: "", expiry: "", cvv: "" });
  const [upi, setUpi] = React.useState("");
  const { cartItems } = useContext(CartContext);
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
  setCard(prev => prev); 
  setUpi(upi);  
}, []);

  // Calculate total amount from cart
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  //const name = card.name || upi || "Customer Name";

  // Cart breakdown for display
  const cartBreakdown = cartItems.length > 0 ? (
    <div style={{ margin: '32px 0', textAlign: 'left' }}>
      <h2 style={{ color: '#d4380d', fontWeight: 700, marginBottom: 12 }}>Order Details</h2>
      <div style={{ fontSize: 18, color: '#222', marginBottom: 10 }}>
        <strong>Username:</strong> {username || <span style={{ color: '#d4380d' }}>Not entered</span>}
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cartItems.map((item, idx) => (
          <li key={idx} style={{ marginBottom: 10, fontSize: 18, color: '#222', background: '#fffbe6', borderRadius: 8, padding: '10px 18px', boxShadow: '0 2px 8px rgba(255,174,94,0.08)' }}>
            <strong>{item.name}</strong> &times; {item.qty} — ₹{item.price * item.qty}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 18, fontSize: 20, fontWeight: 700, color: '#d4380d', background: '#fffbe6', borderRadius: 8, padding: '12px 18px', boxShadow: '0 2px 8px rgba(255,174,94,0.08)' }}>
        Total Amount: ₹{totalAmount}
      </div>
    </div>
  ) : null;

  // Helper to send payment data to backend
  const handlePayment = async (paymentData) => {
    try {
      const res = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...paymentData, amount: totalAmount, items: cartItems, password: enteredPassword })
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = '/payment-success';
      } else {
        window.location.href = '/payment-failed';
      }
    } catch (err) {
      window.location.href = '/payment-failed';
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#fbecc4 0%,#f8fafc 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 0 60px 0"
    }}>
      <div style={{
        maxWidth: 900,
        width: "100%",
        background: "linear-gradient(90deg,#ffe29f 0%,#fffbe6 100%)",
        borderRadius: 32,
        boxShadow: "0 8px 32px rgba(255,174,94,0.10)",
        padding: "56px 32px 32px 32px",
        marginTop: 60,
        marginBottom: 40,
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: 54,
          fontWeight: 900,
          color: "#d4380d",
          marginBottom: 18,
          letterSpacing: 2,
          textShadow: "0 2px 12px #ffe29f"
        }}>
          Payment Options
        </h1>
  {/* Removed duplicate Total Amount heading. The breakdown below will show the total. */}
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ width: "60%", padding: 12, marginBottom: 18, borderRadius: 8, border: "1.5px solid #d4380d", fontSize: 18 }}
        />
        {cartBreakdown}
        {showPassword ? (
          <form style={{ textAlign: "left", marginTop: 18 }} onSubmit={e => {
            e.preventDefault();
            if (enteredPassword === correctPassword) {
              handlePayment({ name: card.name || upi || "Customer Name", amount: totalAmount, username });
            } else {
              alert("Incorrect password. Please try again.");
            }
          }}>
            <h3 style={{ color: "#d4380d", fontWeight: 700, marginBottom: 18 }}>Enter Payment Password</h3>
            <input type="password" placeholder="Enter password" required value={enteredPassword} onChange={e => setEnteredPassword(e.target.value)} style={{ width: "100%", padding: 12, marginBottom: 12, borderRadius: 8, border: "1.5px solid #d4380d", fontSize: 18 }} />
            <button type="submit" style={{ background: "linear-gradient(90deg,#d4380d 0%,#ffb347 100%)", color: "#fff", border: "none", borderRadius: 10, padding: "12px 32px", fontWeight: 700, fontSize: 18, cursor: "pointer", marginTop: 12 }}>Confirm Payment</button>
          </form>
        ) : (
          <>
            <p style={{ fontSize: 20, color: "#222", marginBottom: 24 }}>Please enter your payment password to proceed.</p>
            <button
              style={{ background: "linear-gradient(90deg,#d4380d 0%,#ffb347 100%)", color: "#fff", border: "none", borderRadius: 10, padding: "12px 32px", fontWeight: 700, fontSize: 18, cursor: "pointer", marginBottom: 24 }}
              onClick={() => setShowPassword(true)}
            >Proceed to Pay</button>
          </>
        )}
      </div>
    </div>
  );
}
// Example of sending payment data to backend
fetch('http://localhost:5000/api/payment', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Customer Name',
    amount: 100 // Replace with actual amount
  })
})
.then(res => res.json())
.then(data => {
  if (data.success) {
    // Show payment success page
  } else {
    // Show payment failed page
  }
});

export default Payment;
