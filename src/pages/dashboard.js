// pages/dashboard.js
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/"); // redirect to index.js
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to your Dashboard!</h2>
      <p>You are logged in.</p>
      <button
        onClick={goToHome}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go to Home
      </button>
    </div>
  );
}
