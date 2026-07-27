import { Link } from "react-router-dom";

const features = [
  {
    title: "📘 Notes",
    description: "Well-organized topic-wise Electrical & Electronics notes.",
    link: "/notes",
  },
  {
    title: "📝 MCQs",
    description: "Practice important questions with answers.",
    link: "/mcqs",
  },
  {
    title: "🎯 Quiz",
    description: "Test your knowledge through quizzes.",
    link: "/quiz",
  },
  {
    title: "🤖 AI Tutor",
    description: "Ask engineering questions and get instant explanations.",
    link: "/aitutor",
  },
];

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg,#eef6ff,#ffffff)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3.2rem",
            color: "#1d4ed8",
            marginBottom: "10px",
          }}
        >
          ⚡ ElectroTutor AI
        </h1>

        <h2 style={{ color: "#374151", marginBottom: "20px" }}>
          AI-Powered Learning Platform for Electrical & Electronics Engineering
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            color: "#6b7280",
            lineHeight: 1.7,
          }}
        >
          Learn concepts, solve doubts, practice MCQs, take quizzes and improve
          your engineering knowledge using AI.
        </p>

        <Link to="/aitutor">
          <button
            style={{
              marginTop: "30px",
              padding: "14px 30px",
              fontSize: "18px",
            }}
          >
            🚀 Start Learning
          </button>
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "25px",
            marginTop: "60px",
          }}
        >
          {features.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "16px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  height: "180px",
                }}
              >
                <h3>{item.title}</h3>

                <p
                  style={{
                    color: "#6b7280",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "70px",
            gap: "20px",
          }}
        >
          <Stat number="AI" title="Powered" />
          <Stat number="24×7" title="Available" />
          <Stat number="Notes" title="Learning" />
          <Stat number="MCQs" title="Practice" />
        </div>
      </div>
    </div>
  );
}

function Stat({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        width: "180px",
        boxShadow: "0 5px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2 style={{ color: "#2563eb" }}>{number}</h2>
      <p>{title}</p>
    </div>
  );
}

export default Home;