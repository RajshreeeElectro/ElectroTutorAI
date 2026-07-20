import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0f2fe, #f8fafc)",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#2563eb",
          marginBottom: "10px",
        }}
      >
        ⚡ ElectroTutor AI
      </h1>

      <h2 style={{ color: "#374151" }}>
        AI-Powered Learning Assistant for Electronics Engineering
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "20px auto",
          color: "#6b7280",
        }}
      >
        Learn Electronics with Smart Notes, Interactive MCQs,
        Quizzes and AI-Powered Doubt Solving.
      </p>

      {/* Main Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <Link
          to="/notes"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div style={cardStyle}>
            <h3>📘 Notes</h3>
            <p>Topic-wise Electronics Notes</p>
          </div>
        </Link>

        <Link
          to="/mcqs"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div style={cardStyle}>
            <h3>📝 MCQs</h3>
            <p>Practice Questions & Answers</p>
          </div>
        </Link>

        <Link
          to="/quiz"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div style={cardStyle}>
            <h3>🎯 Quiz</h3>
            <p>Test Your Knowledge</p>
          </div>
        </Link>

        <Link
          to="/aitutor"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div style={cardStyle}>
            <h3>🤖 AI Tutor</h3>
            <p>Ask Doubts Instantly</p>
          </div>
        </Link>
      </div>

      {/* Stats Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h3>📘 6 Notes Topics</h3>
        </div>

        <div style={cardStyle}>
          <h3>📝 5 MCQs</h3>
        </div>

        <div style={cardStyle}>
          <h3>🎯 3 Quiz Questions</h3>
        </div>

        <div style={cardStyle}>
          <h3>🤖 AI Tutor Active</h3>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  backgroundColor: "#ffffff",
  transition: "0.3s",
  cursor: "pointer",
};

export default Home;