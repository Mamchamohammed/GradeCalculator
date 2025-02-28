
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="p-6 min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto my-4"></div>
        <p className="text-xl text-gray-600 mb-6">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="text-gray-500 mb-8">
          This feature is currently under development and will be available soon.
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