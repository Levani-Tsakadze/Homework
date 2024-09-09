import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState(() => {
    const localData = localStorage.getItem('users');
    return localData ? JSON.parse(localData) : [];
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleRegister = (e) => {
    e.preventDefault();

    const userExists = users.some(user => user.email === email);
    if (userExists) {
      alert('This account already exists!');
    } else {
      const newUser = { name, email };
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">User Registration</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
      <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
      <ul className="w-full max-w-xs">
        {users.map((user, index) => (
          <li key={index} className="bg-gray-200 p-2 mb-2 rounded">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
