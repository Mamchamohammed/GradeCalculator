import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import GradeCalculatorS1 from "./GradeCalculatorS1";
import GradeCalculatorS2 from "./GradeCalculatorS2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GradeCalculatorS1" element={<GradeCalculatorS1 />} />
        <Route path="/GradeCalculatorS2" element={<GradeCalculatorS2 />} />
      </Routes>
    </Router>
  );
}

export default App;
