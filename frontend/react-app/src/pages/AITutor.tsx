import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./AITutor.css";

type Message = {
  question: string;
  answer: string;
};

function AITutor() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleAsk = async () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    const currentQuestion = question;

    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: currentQuestion,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          question: currentQuestion,
          answer: data.answer,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          question: currentQuestion,
          answer:
            "❌ Unable to connect to the AI server. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  const copyAnswer = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Answer copied!");
  };

  return (
    <div className="ai-container">
      <h1 className="ai-title">🤖 ElectroTutorAI</h1>

      <p className="ai-subtitle">
        Ask any Electrical or Electronics Engineering question.
      </p>

      <div className="input-area">
        <textarea
          className="question-box"
          rows={5}
          value={question}
          placeholder="Ask your question..."
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleAsk();
            }
          }}
        />

        <button
          className="ask-btn"
          onClick={handleAsk}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        <div className="action-bar">
          <button
            className="clear-btn"
            onClick={() => setMessages([])}
            disabled={messages.length === 0}
          >
            🗑 Clear Chat
          </button>
        </div>
      </div>

      <div className="chat-area">
        {messages.map((msg, index) => (
          <div key={index} className="message-card">
            <div className="user-label">👤 You</div>

            <p>{msg.question}</p>

            <div className="ai-label">🤖 ElectroTutorAI</div>

            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {msg.answer}
            </ReactMarkdown>

            <button
              className="ask-btn"
              style={{ marginTop: 15 }}
              onClick={() => copyAnswer(msg.answer)}
            >
              📋 Copy Answer
            </button>
          </div>
        ))}

        {loading && (
          <div className="loading">
            🤖 Thinking...
          </div>
        )}
      </div>
    </div>
  );
}

export default AITutor;