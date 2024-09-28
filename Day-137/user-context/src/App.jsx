import React from "react";
import { UserProvider } from "./UserContext";
import UserStatus from "./UserStation";
import UserActions from "./UserStation";

const App = () => {
  return (
    <UserProvider>
      <UserStatus />
      <UserActions />
    </UserProvider>
  );
};

export default App;
