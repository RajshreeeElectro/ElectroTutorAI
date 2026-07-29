 require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

if (!process.env.GROQ_API_KEY) {
  throw new Error("❌ GROQ_API_KEY is missing. Add it to your environment variables.");
}

const app = express();

app.use(
  cors({
    origin: [
      "https://electrotutorai.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Backend Working Successfully");
});

app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        answer: "Question is required.",
      });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are ElectroTutorAI.

Always answer using Markdown.

# Definition

# Working

# Important Points

# Applications

# Advantages

# Disadvantages

# Exam Tip

Do not write huge paragraphs.
`,
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    const answer = completion.choices[0].message.content;

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Backend Running on Port ${PORT}`);
});