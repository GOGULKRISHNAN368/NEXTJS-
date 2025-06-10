import QuizTimer from "../components/QuizTimer";
import LivePlayers from "../components/LivePlayers";

const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#fff",
    padding: "1rem 2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "800",
    margin: 0,
    color: "#333",
  },
  link: {
    marginRight: "1rem",
    textDecoration: "none",
    color: "#0070f3",
    fontWeight: "600",
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#222",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#555",
  },
  button: {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "background 0.3s ease",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem",
    color: "#777",
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Trivio</h1>
        <nav>
          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About</a>
          <a href="/contact" style={styles.link}>Contact</a>
          <a href="/login" style={styles.link}>Login</a>
        </nav>
      </header>

      <main style={styles.main}>
        <h2 style={styles.heading}>Welcome to Trivio</h2>
        <p style={styles.description}>
          Challenge your friends and test your knowledge with real-time multiplayer quizzes powered by AI.
        </p>
        <a href="/quiz" style={styles.button}>Start Quiz</a>

        <div style={{ marginTop: "40px" }}>
          <QuizTimer />
          <LivePlayers />
        </div>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 Trivio. All rights reserved.</p>
      </footer>
    </div>
  );
}
