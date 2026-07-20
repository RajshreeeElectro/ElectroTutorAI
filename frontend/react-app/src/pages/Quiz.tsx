import { useState } from "react";

function Quiz() {
  const questions = [
    {
      question: "Which device acts as an electronic switch?",
      answer: "Transistor",
      options: ["Resistor", "Capacitor", "Transistor", "Inductor"],
    },
    {
      question: "What is the SI unit of resistance?",
      answer: "Ohm",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
    },
    {
      question: "Which component stores electrical charge?",
      answer: "Capacitor",
      options: ["Resistor", "Transformer", "Capacitor", "Relay"],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (selected: string) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🎯 Electronics Quiz</h1>

      {quizFinished ? (
        <div>
          <h2>Quiz Completed!</h2>
          <h3>
            Your Score: {score} / {questions.length}
          </h3>
        </div>
      ) : (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            maxWidth: "600px",
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
                  width: "200px",
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

export default Quiz;