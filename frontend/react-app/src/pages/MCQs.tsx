import { useState } from "react";

function MCQs() {
  const questions = [
    {
      question: "Which device acts as an electronic switch?",
      options: ["Resistor", "Capacitor", "Transistor", "Inductor"],
      answer: "Transistor",
    },
    {
      question: "What is the SI unit of resistance?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      answer: "Ohm",
    },
    {
      question: "Which component stores electrical charge?",
      options: ["Resistor", "Transformer", "Capacitor", "Relay"],
      answer: "Capacitor",
    },
    {
      question: "Which law relates Voltage, Current and Resistance?",
      options: ["Faraday Law", "Ohm's Law", "Kirchhoff Law", "Lenz Law"],
      answer: "Ohm's Law",
    },
    {
      question: "Which semiconductor device allows current in one direction?",
      options: ["Transistor", "Relay", "Diode", "Capacitor"],
      answer: "Diode",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (selected: string) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;

    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setFinished(true);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📝 MCQ Practice</h1>

      {finished ? (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            maxWidth: "500px",
          }}
        >
          <h2>🎉 Practice Completed!</h2>
          <h3>
            Score: {score} / {questions.length}
          </h3>
        </div>
      ) : (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            maxWidth: "500px",
          }}
        >
          <h3>
            Question {currentQuestion + 1} of {questions.length}
          </h3>

          <p>{questions[currentQuestion].question}</p>

          {questions[currentQuestion].options.map((option) => (
            <div key={option} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => handleAnswer(option)}
                style={{
                  padding: "10px",
                  width: "220px",
                  cursor: "pointer",
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MCQs;