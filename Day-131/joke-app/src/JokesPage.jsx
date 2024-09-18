import { useState, useEffect } from "react";

function JokesPage() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    setJoke(data.joke || `${data.setup} ... ${data.delivery}`);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded p-6">
        <p className="text-xl">{joke}</p>
        <button
          onClick={fetchJoke}
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Next Joke
        </button>
      </div>
    </div>
  );
}

export default JokesPage;
