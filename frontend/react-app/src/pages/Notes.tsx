import { useState } from "react";

function Notes() {
  const notesData: Record<string, string> = {
    "Analog Electronics":
      "Analog electronics deals with continuous signals. Important topics include diodes, transistors, amplifiers, and oscillators.",

    "Digital Electronics":
      "Digital electronics deals with binary signals (0 and 1). Topics include logic gates, Boolean algebra, flip-flops, counters, and registers.",

    "Microprocessors":
      "A microprocessor is the CPU of a computer system. It performs arithmetic, logical, and control operations.",

    "Communication Systems":
      "Communication systems transfer information from sender to receiver using modulation, transmission channels, and demodulation.",

    "VLSI Design":
      "VLSI stands for Very Large Scale Integration. It involves designing integrated circuits with millions of transistors on a single chip.",

    "Signals & Systems":
      "Signals carry information while systems process signals. Important concepts include convolution, Fourier series, and Laplace transforms.",
  };

  const [selectedTopic, setSelectedTopic] = useState<string>("");

  return (
    <div style={{ padding: "30px" }}>
      <h1>📘 Electronics Notes</h1>
      <p>Select a topic to view notes.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {Object.keys(notesData).map((topic) => (
          <div
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <h3>{topic}</h3>

            <button
              style={{
                padding: "8px 15px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Open Notes
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#f8fafc",
          borderRadius: "12px",
          minHeight: "120px",
        }}
      >
        {selectedTopic ? (
          <>
            <h2>{selectedTopic}</h2>
            <p>{notesData[selectedTopic]}</p>
          </>
        ) : (
          <p>📖 Click on any topic above to view notes.</p>
        )}
      </div>
    </div>
  );
}

export default Notes;