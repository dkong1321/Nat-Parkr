// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    console.log(e.target)
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoSubmit = (e) =>{
    e.preventDefault();
    const credential = "PropanePrince"
    const password = "password1"
    return dispatch(sessionActions.login({credential,password}))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="login_form_container">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div>Log in to See Your Photos</div>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder="Username or Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />
        <button type="submit">Log In</button>
      </form>
      <form onSubmit={demoSubmit} className="demo_form_container">
        <button type="submit">Demo User</button>
      </form>
    </div>
  );
}

export default LoginForm;
