

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Trivio</h1>
        <nav>
          <a href="#" style={styles.link}>Home</a>
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
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 Trivio. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#4A00E0',
    color: '#fff',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '28px',
  },
  link: {
    marginLeft: '20px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    maxWidth: '600px',
    margin: '0 auto 30px',
  },
  button: {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: '#4A00E0',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  footer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#ccc',
  }
};
