import React from "react";

function PaymentSuccess() {
  return (
    <div style={{
      maxWidth: 600,
      margin: "60px auto",
      background: "linear-gradient(120deg,#e0ffe9 0%,#f0fff4 100%)",
      borderRadius: 20,
      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      padding: 40,
      textAlign: "center",
      position: "relative"
    }}>
      {/* Confetti animation */}
      <img src="https://cdn.pixabay.com/animation/2022/10/13/09/36/09-36-36-963_512.gif" alt="Confetti" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.25, pointerEvents: "none" }} />
      <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Success" style={{ width: 100, marginBottom: 24, position: "relative", zIndex: 1 }} />
      <h2 style={{ color: "#52c41a", fontSize: 32, fontWeight: 700, marginBottom: 18, position: "relative", zIndex: 1 }}>Payment Successful!</h2>
      <p style={{ color: "#222", fontSize: 20, marginBottom: 30, position: "relative", zIndex: 1 }}>
        Thank you for your sweet purchase!<br />
        Your order is on its way and will be delivered with a smile.<br />
        <span style={{ color: "#d4380d", fontWeight: 600 }}>Enjoy your treats!</span>
      </p>
      <a href="/" style={{
        display: "inline-block",
        background: "linear-gradient(90deg,#52c41a 0%,#b7ffb0 100%)",
        color: "#fff",
        borderRadius: 12,
        padding: "14px 36px",
        fontWeight: 700,
        fontSize: 18,
        textDecoration: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
        marginTop: 10,
        position: "relative",
        zIndex: 1
      }}>Go to Home</a>
    </div>
  );
}

export default PaymentSuccess;
