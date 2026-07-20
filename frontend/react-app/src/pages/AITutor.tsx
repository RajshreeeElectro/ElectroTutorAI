import { useState } from "react";

function AITutor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    const q = question.toLowerCase();

    if (q.includes("transistor")) {
      setAnswer(
        "A transistor is a semiconductor device used for switching and amplification."
      );
    } else if (q.includes("resistor")) {
      setAnswer(
        "A resistor limits the flow of electric current in a circuit."
      );
    } else if (q.includes("capacitor")) {
      setAnswer(
        "A capacitor stores electrical energy in the form of an electric field."
      );
    } else if (q.includes("diode")) {
      setAnswer(
        "A diode allows current to flow in one direction and blocks it in the opposite direction."
      );
    } else {
      setAnswer(
        "Sorry, I don't have an answer for that yet. This feature will be connected to a real AI backend later."
      );
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🤖 ElectroTutor AI</h1>

      <p>Ask your Electronics questions below:</p>

      <input
        type="text"
        placeholder="Ask your Electronics question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "400px",
          padding: "10px",
          borderRadius: "6px",
        }}
      />

      <br />
      <br />

      <button
        onClick={handleAsk}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Ask AI
      </button>

      {answer && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f4f4f4",
            borderRadius: "8px",
            maxWidth: "600px",
          }}
        >
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default AITutor;