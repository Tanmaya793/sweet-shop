import ProductList from "../components/ProductList";

function Shop() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#fbecc4 0%,#f8fafc 100%)",
      padding: "40px 0"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <h1 style={{ textAlign: "center", color: "#d4380d", fontSize: 44, fontWeight: 800, marginBottom: 48, letterSpacing: 2, textShadow: "0 2px 8px #fffbe6" }}>Welcome to Sweet Shop</h1>
        <div style={{
          background: "linear-gradient(120deg,#ffe29f 0%,#fbecc4 100%)",
          borderRadius: 32,
          boxShadow: "0 8px 32px rgba(255,174,94,0.10)",
          padding: 48,
          marginBottom: 40,
          border: "2px solid #ffe29f"
        }}>
          <h2 style={{
            color: "#d4380d",
            fontSize: 36,
            fontWeight: 800,
            marginBottom: 36,
            textAlign: "center",
            letterSpacing: 2,
            textShadow: "0 2px 12px #ffe29f"
          }}>🍦 Ice Creams</h2>
          <div style={{ display: "flex", flexDirection: "row", gap: 28, overflowX: "auto", paddingBottom: 14 }}>
            <ProductList category="icecream" />
          </div>
        </div>
        <div style={{
          background: "linear-gradient(120deg,#ffe29f 0%,#fbecc4 100%)",
          borderRadius: 32,
          boxShadow: "0 8px 32px rgba(255,174,94,0.10)",
          padding: 48,
          marginBottom: 40,
          border: "2px solid #ffe29f"
        }}>
          <h2 style={{
            color: "#d4380d",
            fontSize: 36,
            fontWeight: 800,
            marginBottom: 36,
            textAlign: "center",
            letterSpacing: 2,
            textShadow: "0 2px 12px #ffe29f"
          }}>🍫 Chocolates</h2>
          <div style={{ display: "flex", flexDirection: "row", gap: 28, overflowX: "auto", paddingBottom: 14 }}>
            <ProductList category="chocolate" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;