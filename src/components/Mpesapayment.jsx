import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Mpesapayment = () => {
  const { product } = useLocation().state || {};

  const [messages, setMessages] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const img_url =
    "https://wayneoryx.alwaysdata.net/static/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessages("Processing payment...");
    setError("");

    try {
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("ammount", product.product_cost);

      const response = await axios.post(
        "https://modcom2026.alwaysdata.net/api/mpesa_payment",
        formData
      );

      setMessages(response.data.message);
    } catch (error) {
      setError("Payment failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!product) {
    return (
      <div className="checkout-page">
        <div className="checkout-card">
          <h3>No product selected</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      <div className="checkout-title">
        <h2>💳 Checkout</h2>
        <p>Complete your purchase securely via M-Pesa</p>
      </div>

      {/* ALERTS */}
      {messages && <div className="alert success">{messages}</div>}
      {error && <div className="alert error">{error}</div>}

      <div className="checkout-container">

        {/* PRODUCT CARD */}
        <div className="checkout-card product-card">

          <img
            src={img_url + product.product_photo}
            alt={product.product_name}
            className="checkout-img"
          />

          <h3>{product.product_name}</h3>
          <p>{product.product_description}</p>

          <div className="price">
            ₭ {product.product_cost}
          </div>

        </div>

        {/* PAYMENT CARD */}
        <div className="checkout-card">

          <h3> M-Pesa Payment</h3>

          <form onSubmit={handleSubmit} className="checkout-form">

            <input
              type="tel"
              placeholder="Enter phone number (e.g 07XXXXXXXX)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Make Payment"}
            </button>

          </form>

          <p className="checkout-note">
            You will receive an STK push on your phone.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Mpesapayment;