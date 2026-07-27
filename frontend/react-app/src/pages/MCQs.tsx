import { useState } from "react";

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

function MCQs() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[current];

  const handleSelect = (option: string) => {
    if (selected) return;

    setSelected(option);

    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 === questions.length) {
      setFinished(true);
      return;
    }

    setCurrent((prev) => prev + 1);
    setSelected("");
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div style={{ padding: 30, textAlign: "center" }}>
        <h1>🎉 Quiz Completed</h1>

        <h2>
          Score: {score} / {questions.length}
        </h2>

        <h3>{percentage}%</h3>

        <button onClick={restartQuiz}>
          🔄 Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        padding: 25,
        background: "#fff",
        borderRadius: 15,
        boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      }}
    >
      <h1>📝 MCQ Practice</h1>

      <p>
        Question {current + 1} of {questions.length}
      </p>

      <div
        style={{
          width: "100%",
          height: 10,
          background: "#ddd",
          borderRadius: 20,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: `${((current + 1) / questions.length) * 100}%`,
            height: "100%",
            background: "#2563eb",
            borderRadius: 20,
          }}
        />
      </div>

      <h3>{currentQuestion.question}</h3>

      {currentQuestion.options.map((option) => {
        let background = "#f5f5f5";

        if (selected) {
          if (option === currentQuestion.answer) {
            background = "#22c55e";
          } else if (option === selected) {
            background = "#ef4444";
          }
        }

        return (
          <button
            key={option}
            disabled={!!selected}
            onClick={() => handleSelect(option)}
            style={{
              display: "block",
              width: "100%",
              margin: "10px 0",
              padding: "14px",
              borderRadius: 10,
              border: "none",
              cursor: selected ? "default" : "pointer",
              background,
              color: selected ? "#fff" : "#000",
            }}
          >
            {option}
          </button>
        );
      })}

      {selected && (
        <div style={{ marginTop: 20 }}>
          <button onClick={nextQuestion}>
            {current + 1 === questions.length
              ? "Finish Quiz"
              : "Next Question ➜"}
          </button>
        </div>
      )}
    </div>
  );
}

export default MCQs;