import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import GradeCalculatorM1GLS1 from "./pages/GradeCalculatorM1GLS1";
import GradeCalculatorM1GLS2 from "./pages/GradeCalculatorM1GLS2";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GradeCalculatorM1GLS1" element={<GradeCalculatorM1GLS1 />} />
        <Route path="/GradeCalculatorM1GLS2" element={<GradeCalculatorM1GLS2 />} />
        <Route path="/ComingSoon" element={<ComingSoon/>} />
      </Routes>
    </Router>
  );
}

export default App;
