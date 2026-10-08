import { useState } from "react";
import "./RegisterForm.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the browser from reloading the page

    // Exactly the fields the contract expects for POST /api/patients/register
    const requestBody = { name, email, password };

    // No API call yet. For now we only log the data.
    console.log("Register request body:", requestBody);
    setMessage("Form submitted. Check the browser console.");
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Patient Registration</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Register</button>

      {message && <p className="register-message">{message}</p>}
    </form>
  );
}

export default RegisterForm;