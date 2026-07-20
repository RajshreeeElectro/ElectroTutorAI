import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#1e3a8a",
      }}
    >   
      <h2 style={{ color: "white" }}>ElectroTutor AI</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/notes" style={{ color: "white", textDecoration: "none" }}>
          Notes
        </Link>

        <Link to="/mcqs" style={{ color: "white", textDecoration: "none" }}>
          MCQs
        </Link>

        <Link to="/quiz" style={{ color: "white", textDecoration: "none" }}>
          Quiz
        </Link>

        <Link
          to="/aitutor"
          style={{ color: "white", textDecoration: "none" }}
        >
          AI Tutor
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;