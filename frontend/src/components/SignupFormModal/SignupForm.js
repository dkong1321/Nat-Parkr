// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css'
function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const demoSubmit = (e) =>{
    e.preventDefault();
    const credential = "PropanePrince"
    const password = "password1"
    return dispatch(sessionActions.login({credential,password}))
  }

  return (
      <div className="sign_up_page">
        <div className="sign_up_form_container">
          <form onSubmit={handleSubmit} className="sign_up_form">
          <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>

          <div className="sign_up_header">Sign up for "blank"</div>
            <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            />
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            />
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            />
            <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Conform Password"
            required
            />

          <button type="submit">Sign Up</button>
          </form>
          <form onSubmit={demoSubmit} className="demo_form_container">
            <button type="submit">Demo User</button>
          </form>
        </div>
      </div>

  );
}

export default SignupForm;