
import ImageSlider from "../components/ImageSlider";

function Home() {
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
          Welcome to Sweet Shop <span role="img" aria-label="icecream">🍦</span><span role="img" aria-label="chocolate">🍫</span>
        </h1>
        <p style={{
          fontSize: 24,
          color: "#222",
          marginBottom: 32,
          fontWeight: 500
        }}>
          Discover the best Ice Creams and Chocolates in town!
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 32 }}>
          <div style={{ background: "#e0f7fa", borderRadius: 18, padding: "24px 32px", boxShadow: "0 2px 8px #b2ebf2", minWidth: 180 }}>
            <h3 style={{ color: "#00bcd4", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Fresh Ice Creams</h3>
            <p style={{ color: "#555", fontSize: 16 }}>Enjoy a variety of flavors made daily.</p>
          </div>
          <div style={{ background: "#fffbe6", borderRadius: 18, padding: "24px 32px", boxShadow: "0 2px 8px #ffe29f", minWidth: 180 }}>
            <h3 style={{ color: "#d4380d", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Premium Chocolates</h3>
            <p style={{ color: "#555", fontSize: 16 }}>Handcrafted chocolates for every occasion.</p>
          </div>
        </div>
        <ImageSlider />
      </div>
    </div>
  );
}





export default Home;