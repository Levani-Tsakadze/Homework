import React from "react";
import { useUser } from "./UserContext";

const UserStatus = () => {
  const { isLoggedIn, user } = useUser();
  return (
    <div>
      {isLoggedIn ? <h1>Welcome, {user.name}</h1> : <h1>Please log in</h1>}
    </div>
  );
};

const UserActions = () => {
  const { login, logout, isLoggedIn } = useUser();
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};
