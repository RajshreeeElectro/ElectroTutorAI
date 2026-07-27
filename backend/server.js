require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Working Successfully");
});

console.log("SERVER FILE LOADED - GROQ VERSION");

// AI Route
app.post("/ask", async (req, res) => {
  console.log("ASK API HIT");

  try {
    const { question } = req.body;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
  {
    role: "system",
    content: `
You are ElectroTutorAI.

You teach Electrical and Electronics Engineering.

Always answer in this format:

# Definition

(Simple explanation)

# Working

Explain step by step.

# Important Points

Use bullet points.

# Applications

List applications.

# Advantages

If applicable.

# Disadvantages

If applicable.

# Exam Tip

Give one short exam tip.

Use Markdown formatting.

Never write huge paragraphs.
`,
  },
  {
    role: "user",
    content: question,
  },
],
    });

    const answer = completion.choices[0].message.content;

    console.log("Groq Response:", answer);

    res.json({
      answer,
    });
  } catch (error) {
    console.error("Groq Error:", error);

    res.status(500).json({
      answer: "Error communicating with Groq API",
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend Running on Port ${PORT}`);
});