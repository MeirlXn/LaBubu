import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all"); // NEW
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const img_url =
    "https://wayneoryx.alwaysdata.net/static/images/";

  const getProducts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://wayneoryx.alwaysdata.net/api/get_products_details"
      );

      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // ================= FILTER LOGIC =================
  const filteredProducts = products
    .filter((product) =>
      product.product_name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => {
      const price = Number(product.product_cost);

      if (priceFilter === "above") return price >= 650;
      if (priceFilter === "below") return price < 650;
      return true; // "all"
    });

  return (
    <div className="row">

      <h3
        className="title-about"
        style={{ justifyContent: "center", display: "flex" }}
      >
        Available Art
      </h3>

      {/* SEARCH + FILTER */}
      <div className="search-container" style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>

        <input
          type="text"
          placeholder="Search art by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

        {/* PRICE FILTER */}
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
          }}
        >
          <option value="all">All Prices</option>
          <option value="above">Above 650</option>
          <option value="below">Below 650</option>
        </select>

      </div>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="col-md-3 justify-content-center mb-4"
          >
            <div className="my-card">
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="product_img"
              />

              <div className="card-body">
                <br />

                <h5 className="namess">
                  <b>{product.product_name}</b>
                </h5>

                <p>
                  <b>{product.product_description}</b>
                </p>

                <b>₭ {product.product_cost}</b>
                <br />

                <button
                  className="purchase"
                  onClick={() =>
                    navigate("/makepayment", {
                      state: { product },
                    })
                  }
                >
                  Purchase now
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No artwork found.</p>
      )}
    </div>
  );
};

export default Products;