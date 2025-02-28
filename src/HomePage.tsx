import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome To Grade Calculator</h1>
      <div className="grid gap-4 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Master 1 GL</h2>
        <button
          onClick={() => navigate("/GradeCalculatorM1GLS1")}
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          S1 Grade Calculator
        </button>
        <button
          onClick={() => navigate("/GradeCalculatorM1GLS2")}
          className="w-full bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all"
        >
          S2 Grade Calculator
        </button>
      </div>
      <div className="grid gap-4 w-full max-w-md mt-8">
        <h2 className="text-xl font-bold mb-4 text-center">L3</h2>
        <button
          onClick={() => navigate("/ComingSoon")}
          className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition-all"
        >
          L3 S1 Grade Calculator
        </button>
        <button
          onClick={() => navigate("/ComingSoon")}
          className="w-full bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-all"
        >
          L3 S2 Grade Calculator
        </button>
      </div>
    </div>
  );
}
