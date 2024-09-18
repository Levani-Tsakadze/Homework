import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/weather?city=${city}`);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold mb-4">Weather App</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded"
          placeholder="Enter city name"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default App;
