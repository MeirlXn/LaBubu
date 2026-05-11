import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Home({ artworks = [] }) {
  const navigate = useNavigate();

  // HERO ARTWORKS
  const featuredArtworks = artworks.slice(0, 3);

  // PRELOAD IMAGES
  useEffect(() => {
    artworks.forEach((art) => {
      const img = new Image();
      img.src = art.image;
    });
  }, [artworks]);

  return (
    <div className="bg-light text-light">

      {/* HERO - SWIPER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {featuredArtworks.map((art) => (
          <SwiperSlide key={art.id}>
            <div
              style={{
                height: "70vh",
                backgroundImage: `url(${art.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              {/* OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                }}
              />

              {/* CONTENT */}
              <div
                className="d-flex flex-column justify-content-center text-light"
                style={{
                  position: "absolute",
                  inset: 0,
                  padding: "50px",
                  maxWidth: "600px",
                }}
              >
                <h1>
                  Welcome to{" "}
                  <span style={{ color: "#fff", fontWeight: "bold" }}>
                    ArtLoop
                  </span>
                </h1>

                <h4>We sell:</h4>

                <h1>{art.title}</h1>

                <div className="mt-3">
                  <button
                    className="btn btn-light"
                    onClick={() => navigate("/products")}
                  >
                    Explore Shop
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>



 {/* WHAT WE OFFER */}
      <div className="container py-5">
        <h2 className="mb-5 text-center text-dark">What We Offer</h2>

        <div className="row text-center g-4">

          <div className="col-md-4">
            <div className="p-4 rounded shadow h-100 offer-card" style={{ background: "#2f2b27ff" }}>
              <div style={{ fontSize: "40px" }}>🚚</div>
              <h5 className="mt-3">Free Shipping</h5>
              <p style={{ color: "#C0AB9A" }}>
                Fast delivery on all orders.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 rounded shadow h-100 offer-card" style={{ background: "#2f2b27ff" }}>
              <div style={{ fontSize: "40px" }}>🛠️</div>
              <h5 className="mt-3">Repair Services</h5>
              <p style={{ color: "#C0AB9A" }}>
                We maintain your products.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 rounded shadow h-100 offer-card" style={{ background: "#2f2b27ff" }}>
              <div style={{ fontSize: "40px" }}>💬</div>
              <h5 className="mt-3">Support</h5>
              <p style={{ color: "#C0AB9A" }}>
                Always here to help you.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* GALLERY */}
      <div className="container py-5">
        <h2 className="mb-5 text-center text-dark">
          Explore Art
        </h2>

        <div className="row">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="col-12 col-sm-6 col-lg-4 mb-4"
            >
              <div className="my-card h-100">
                <img
                  loading="lazy"
                  src={art.image}
                  alt={art.title}
                  className="product_img"
                  style={{
                    height: "270px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <div className="card-body">
                  <h5 className="mt-3">
                    <b>{art.title}</b>
                  </h5>

                  <p
                    style={{
                      fontSize: "14px",
                      opacity: 0.7,
                      color: "#2f2b27",
                    }}
                  >
                    <b>- {art.artist} -</b>
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "#2f2b27",
                    }}
                  >
                    {art.description}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <button
                      className="purchase"
                      onClick={() => navigate(`/art/${art.id}`)}
                    >
                      View Details
                    </button>

                    <span
                      style={{
                        color: "#2f2b27",
                        fontWeight: "bold",
                      }}
                    >
                      ❤️ {art.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="text-center py-5"
        style={{ background: "#C0AB9A" }}
      >
        <h2 style={{ color: "#171411" }}>
          Got your own art?
        </h2>

        <p style={{ color: "#2f2b27" }}>
          Share it with the world!
        </p>

        <button
          className="hmm"
          onClick={() => navigate("/addproduct")}
        >
          Upload Art
        </button>
      </div>
    </div>
  );
}

export default Home;