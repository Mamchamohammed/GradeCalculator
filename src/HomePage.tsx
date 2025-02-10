import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome</h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/GradeCalculatorS1")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
        >
          Go to Grade Calculator S1
        </button>
        <button
          onClick={() => navigate("/GradeCalculatorS2")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600"
        >
          Go to Grade Calculator S2
        </button>
      </div>
    </div>
  );
}
