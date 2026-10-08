import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the browser from reloading the page

    // Exactly the fields the contract expects for POST /api/patients/login
    const requestBody = { email, password };

    // No API call yet. For now we only log the data.
    console.log("Login request body:", requestBody);
    setMessage("Form submitted. Check the browser console.");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Patient Login</h2>

      <label htmlFor="login-email">Email</label>
      <input
        id="login-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="login-password">Password</label>
      <input
        id="login-password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>

      {message && <p className="login-message">{message}</p>}
    </form>
  );
}

export default LoginForm;