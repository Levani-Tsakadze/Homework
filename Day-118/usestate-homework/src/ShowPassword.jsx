import React, { useState } from 'react';

function ShowPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input type={showPassword ? "text" : "password"} placeholder="Password" />
      <label>
        <input 
          type="checkbox" 
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        /> Show Password
      </label>
    </div>
  );
}

export default ShowPassword
