export default function AboutPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>About Trivio</h1>

      <p>
        <strong>Trivio</strong> is an innovative AI-powered multiplayer quiz platform that allows multiple users to join live quiz rooms,
        compete in real time, and view dynamic leaderboards. It’s built for educational institutions, students, and anyone who enjoys learning
        through fun and competition.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}> Our Mission</h2>
      <p>
        To make learning interactive, competitive, and intelligent using AI-driven question generation, performance analysis, and adaptive difficulty levels.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}> Features</h2>
      <ul style={{ paddingLeft: '1.2rem' }}>
        <li>Real-time multiplayer quiz rooms</li>
        <li>AI-generated and curated quiz questions</li>
        <li>Smart scoring and live leaderboard</li>
        <li>Analytics for student performance</li>
        <li>Simple interface with no setup required</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}> Who Can Use Trivio?</h2>
      <ul style={{ paddingLeft: '1.2rem' }}>
        <li>Schools and colleges</li>
        <li>Competitive exam training centers</li>
        <li>Corporate training and team-building</li>
        <li>Students preparing for exams</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}> Built Using</h2>
      <ul style={{ paddingLeft: '1.2rem' }}>
        <li>Next.js (Frontend)</li>
        <li>Node.js & Express (Backend)</li>
        <li>MongoDB (Database)</li>
        <li>Python APIs for AI/ML question generation</li>
      </ul>

      <p style={{ marginTop: '2rem' }}>
        <strong>We believe learning should never be boring. Let Trivio make it fun and competitive!</strong>
      </p>
    </div>
  );
}
