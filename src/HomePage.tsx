import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome</h1>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <button
          onClick={() => navigate("/GradeCalculatorS1")}
          className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          S1 Grade Calculator
        </button>
        <button
          onClick={() => navigate("/GradeCalculatorS2")}
          className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all"
        >
          S2 Grade Calculator
        </button>
      </div>
    </div>
  );
}
