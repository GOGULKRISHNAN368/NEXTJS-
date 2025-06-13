import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebaseConfig";
import { useRouter } from "next/router";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirect to login
    } catch (err) {
      setError("Registration failed: " + err.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Create Account 📝</h2>
        <p style={styles.subheading}>Join us today</p>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link href="/" style={styles.link}>Back to Login</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #ff758c, #ff7eb3)",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2.5rem",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "0.5rem",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  subheading: {
    marginBottom: "1.5rem",
    color: "#666",
  },
  error: {
    color: "red",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  button: {
    padding: "12px",
    backgroundColor: "#ff4081",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  footerText: {
    marginTop: "1rem",
    color: "#555",
  },
  link: {
    color: "#ff4081",
    textDecoration: "underline",
    cursor: "pointer",
  },
};
