import React from "react";

function PaymentFailed() {
  return (
    <div style={{
      maxWidth: 600,
      margin: "60px auto",
      background: "linear-gradient(120deg,#ffe9e9 0%,#fff0f0 100%)",
      borderRadius: 20,
      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      padding: 40,
      textAlign: "center"
    }}>
      <img src="https://cdn-icons-png.flaticon.com/512/753/753345.png" alt="Failed" style={{ width: 100, marginBottom: 24 }} />
      <h2 style={{ color: "#d4380d", fontSize: 32, fontWeight: 700, marginBottom: 18 }}>Payment Failed</h2>
      <p style={{ color: "#222", fontSize: 20, marginBottom: 30 }}>
        Oops! Something went wrong.<br />
        Your payment could not be processed.<br />
        Please try again or contact support.
      </p>
      <a href="/payment" style={{
        display: "inline-block",
        background: "linear-gradient(90deg,#d4380d 0%,#ffb0b0 100%)",
        color: "#fff",
        borderRadius: 12,
        padding: "14px 36px",
        fontWeight: 700,
        fontSize: 18,
        textDecoration: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
        marginTop: 10
      }}>Try Again</a>
    </div>
  );
}

export default PaymentFailed;
