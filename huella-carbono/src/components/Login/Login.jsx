import React from "react";

const Login = () => {
  return (
    <div className="login">
      <form className="form-login" method="POST"
        action="http://localhost:3001/login">
        <label>
          <p>Username</p>
          <input type="text" name="email" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
