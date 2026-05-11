import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "https://wayneoryx.alwaysdata.net/api/signin",
        formData
      );

      if (response.data.user) {
        setSuccess(response.data.message);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        window.location.href = "/";
      } else {
        setError(response.data.message);
        setLoading(false);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to continue to ArtLoop</p>

        {success && <div className="alert success">{success}</div>}
        {error && <div className="alert error">{error}</div>}
        {loading && <div className="alert info">Signing you in...</div>}

        <form onSubmit={handleSignin} className="login-form">

          <input
            type="email"
            placeholder="Email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="login-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

      </div>
    </div>
  );
};

export default Signin;