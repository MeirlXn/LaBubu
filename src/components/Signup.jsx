import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitSignupDetails = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);

      const response = await axios.post(
        "https://wayneoryx.alwaysdata.net/api/signup",
        formData
      );

      setSuccess(response.data.success || "Account created successfully 🎉");

      // reset fields
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");
    } catch (err) {
      setError("Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 className="login-title">Create Account ✨</h2>
        <p className="login-subtitle">Join ArtLoop and start sharing art</p>

        {success && <div className="alert success">{success}</div>}
        {error && <div className="alert error">{error}</div>}
        {loading && <div className="alert info">Creating account...</div>}

        <form onSubmit={submitSignupDetails} className="login-form">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>

        </form>

        <p className="login-footer">
          Already have an account? <Link to="/signin">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;