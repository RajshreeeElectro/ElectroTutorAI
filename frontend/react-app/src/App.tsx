import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import MCQs from "./pages/MCQs";
import Quiz from "./pages/Quiz";
import AITutor from "./pages/AITutor";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/mcqs" element={<MCQs />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/aitutor" element={<AITutor />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;