import React, { useState, useEffect } from "react";
import "./App.css";

import { FaEnvelope, FaInstagram, FaXTwitter } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Addproduct from "./components/AddProduct";
import Home from "./components/Home";
import ArtDetails from "./components/ArtDetails";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Aboutus from "./components/Aboutus";
import Products from "./components/Products";
import Mpesapayment from "./components/Mpesapayment";

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  // ================= ARTWORKS =================
  const [artworks, setArtworks] = useState([
    {
      id: 1,
      title: "Digital Art",
      artist: "John D",
      image:
        "https://ichef.bbci.co.uk/news/800/cpsprodpb/14D98/production/_129800458_nftart2.jpg.webp",
      likes: 120,
      description: "A futuristic digital artwork blending neon aesthetics.",
    },
    {
      id: 2,
      title: "Sketch Works",
      artist: "Sarah L",
      image:
        "https://drawyager.com/wp-content/uploads/2024/07/cool_sketch_ideas-2.png.webp",
      likes: 89,
      description: "Hand-drawn sketch exploring human expression.",
    },
    {
      id: 3,
      title: "Abstract Paintings",
      artist: "Mike T",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/2/YE/UO/VJ/9107407/beautiful-abstract-frameless-wall-painting-for-home-springfield-1000x1000.jpg",
      likes: 45,
      description: "Abstract painting full of color and emotion.",
    },
  ]);

  // LIKE
  const handleLike = (id) => {
    setArtworks((prev) =>
      prev.map((art) =>
        art.id === id ? { ...art, likes: art.likes + 1 } : art
      )
    );
  };

  // PROTECTED ROUTE
  const ProtectedRoute = ({ children }) => {
    return user ? children : <Navigate to="/signin" />;
  };

  // BACK TO TOP
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <div className="app-layout">

        {/* HEADER */}
        <header className="header">
          <div>
            <Link to="/" className="title">
              <b>ArtLoop</b>
            </Link>
          </div>

          <nav>
            <Link to="/" className="btnz"><b>Home</b></Link>
            <Link to="/products" className="btnz"><b>Shop</b></Link>

            {user && (
              <Link to="/addproduct" className="btnz"><b>Add Art</b></Link>
            )}

            <Link to="/aboutus" className="btnz"><b>About Us</b></Link>

            {!user && (
              <>
                <Link to="/signin" className="btnz"><b>Login</b></Link>
                <Link to="/signup" className="btnz"><b>Signup</b></Link>
              </>
            )}

            {user && (
              <button
                className="btnz"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.href = "/signin";
                }}
              >
                <b>Logout</b>
              </button>
            )}
          </nav>
        </header>

        {/* ROUTES */}
        <main>
          <Routes>
            <Route path="/" element={<Home artworks={artworks} />} />

            <Route
              path="/art/:id"
              element={<ArtDetails artworks={artworks} handleLike={handleLike} />}
            />

            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/products" element={<Products />} />

            <Route
              path="/addproduct"
              element={
                <ProtectedRoute>
                  <Addproduct />
                </ProtectedRoute>
              }
            />

            <Route
              path="/makepayment"
              element={
                <ProtectedRoute>
                  <Mpesapayment />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {/* ===== YOUR ORIGINAL FOOTER (UNCHANGED) ===== */}
        <footer className="emo-footer">
          <div className="footer-container">
            <div className="footer-col">
              <h2>
                ArtLoop
              </h2>

              <p>
                <b>
                  ArtLoop is where artists create and
                  share. Crafted for those who feel deeply.
                </b>
              </p>
            </div>

            <div className="footer-col">
              <h3>
                <u>Contact</u>
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>

                <a
                  href="https://gmail.com/ArtLoop"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "10px", color: "inherit", textDecoration: "none" }}
                >
                  <FaEnvelope style={{ color: "#C0AB9A" }} />
                  <span>ArtLoop@gmail.com</span>
                </a>

                <a
                  href="https://instagram.com/ArtLoop"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "10px", color: "inherit", textDecoration: "none" }}
                >
                  <FaInstagram style={{ color: "#C0AB9A" }} />
                  <span>@ArtLoop</span>
                </a>

                <a
                  href="https://x.com/ArtLoop"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "10px", color: "inherit", textDecoration: "none" }}
                >
                  <FaXTwitter style={{ color: "#C0AB9A" }} />
                  <span>@ArtLoop</span>
                </a>

              </div>
            </div>

            <div className="footer-col">
              <h3>
                <u>Links</u>
              </h3>

              <br />

              <div className="footer-links">
                <Link to="/"><b>Home</b></Link>
                <Link to="/products"><b>Shop</b></Link>
                <Link to="/aboutus"><b>About Us</b></Link>
              </div>
            </div>
          </div>

          <hr />

          <p className="emo-copy">
            <b>
              © 2026 ArtLoop. Where Artistic Souls Meet.
            </b>
          </p>
        </footer>

        {/* BACK TO TOP */}
        {showTop && (
          <button className="back-to-top" onClick={scrollToTop}>
            ⬆
          </button>
        )}

      </div>
    </Router>
  );
}

export default App;