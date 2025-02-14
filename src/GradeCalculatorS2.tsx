import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const subjects = [
  { name: "Conception orienté objet", exam: 0.5, ca: 0.5, coefficient: 3 },
  { name: "Assurance qualité logicielle", exam: 1.0, ca: 0.0, coefficient: 2 },
  { name: "Base de données avancées 1", exam: 0.5, ca: 0.5, coefficient: 3 },
  { name: "Algorithmique avancée", exam: 0.66, ca: 0.34, coefficient: 2 },
  { name: "Middlewares et systèmes distribués", exam: 0.66, ca: 0.34, coefficient: 2 },
  { name: "Data Science", exam: 0.66, ca: 0.34, coefficient: 2 },
  { name: "Analyse de données", exam: 0.66, ca: 0.34, coefficient: 2 },
  { name: "Anglais", exam: 1.0, ca: 0, coefficient: 1 },
];

export default function ExamCalculator() {
  const navigate = useNavigate();

  const [scores, setScores] = useState(() => {
    const savedScores = Cookies.get("examScoresS2");
    return savedScores ? JSON.parse(savedScores) : subjects.map(() => ({ exam: "", ca: "" }));
  });

  useEffect(() => {
    Cookies.set("examScoresS2", JSON.stringify(scores), { expires: 365 });
  }, [scores]);

  const handleChange = (index:number, type: "exam" | "ca", value: string) => {
    const newScores = [...scores];
    newScores[index][type] = value;
    setScores(newScores);
  };

  const calculateGrade = (index: number) => {
    const subject = subjects[index];
    const examScore = parseFloat(scores[index].exam) || 0;
    const caScore = parseFloat(scores[index].ca) || 0;
    return (examScore * subject.exam + caScore * subject.ca).toFixed(2);
  };

  const calculateAverage = () => {
    let total = 0;
    let totalCoeff = 0;

    subjects.forEach((subject, index) => {
      const weightedScore = parseFloat(calculateGrade(index)) || 0;
      total += weightedScore * subject.coefficient;
      totalCoeff += subject.coefficient;
    });

    return totalCoeff > 0 ? (total / totalCoeff).toFixed(2) : "0.00";
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Exam Calculator</h1>
        <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Exam</th>
              <th className="p-2 border">CA</th>
              <th className="p-2 border">Grade</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{subject.name}</td>
                <td className="p-2 border">
                  <input
                    type="number"
                    value={scores[index].exam}
                    onChange={(e) => handleChange(index, "exam", e.target.value)}
                    className="w-full p-1 border rounded text-center"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    value={scores[index].ca}
                    onChange={(e) => handleChange(index, "ca", e.target.value)}
                    className="w-full p-1 border rounded text-center"
                    disabled={subject.ca === 0}
                  />
                </td>
                <td className="p-2 border font-bold">{calculateGrade(index)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold mt-2">Average: {calculateAverage()}</h2>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
      >
        Back
      </button>
    </div>
  );
}