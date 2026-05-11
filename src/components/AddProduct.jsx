import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [product_name, setProductName] = useState("");
  const [product_photo, setProductPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [product_cost, setProductCost] = useState("");
  const [product_description, setProductDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // image preview
  const handleImage = (e) => {
    const file = e.target.files[0];
    setProductPhoto(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);

      const response = await axios.post(
        "https://wayneoryx.alwaysdata.net/api/add_product",
        formData
      );

      setSuccess(response.data.success || "Artwork uploaded successfully 🎉");

      // reset form
      setProductName("");
      setProductCost("");
      setProductDescription("");
      setProductPhoto(null);
      setPreview(null);
    } catch (error) {
      setError("Upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-page">

      <div className="upload-title">
        <h2>🎨 Upload Your Art</h2>
        <p>Share your creativity with the ArtLoop community</p>
      </div>

      {error && <div className="alert error">{error}</div>}
      {success && <div className="alert success">{success}</div>}
      {loading && <div className="alert info">Uploading artwork...</div>}

      <div className="upload-card">

        {/* PREVIEW */}
        {preview && (
          <img src={preview} alt="preview" className="upload-preview" />
        )}

        <form onSubmit={handleSubmit} className="upload-form">

          <input
            type="text"
            placeholder="Art name"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <textarea
            placeholder="Art description"
            value={product_description}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Price (Ksh)"
            value={product_cost}
            onChange={(e) => setProductCost(e.target.value)}
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            required
          />

          <p className="fee-note">
            ⚠ 3% platform fee will be deducted from sales
          </p>

          <button type="submit" disabled={loading}>
            {loading ? "Uploading..." : "Upload Artwork"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddProduct;