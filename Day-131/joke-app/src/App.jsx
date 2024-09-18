import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Joke Generator</h1>
      <button
        onClick={() => navigate("/jokes")}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Get a Random Joke
      </button>
    </div>
  );
}

export default App;
