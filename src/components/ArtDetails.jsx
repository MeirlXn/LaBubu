import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function ArtDetails({
  artworks = [],
  handleLike,
}) {

  const { id } = useParams();
  const navigate = useNavigate();

  // FIND ART
  const art = artworks.find(
    (a) => a.id === Number(id)
  );

  // STATES
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  // LOAD COMMENTS
  useEffect(() => {

    if (!art?.title) return;

    const fetchComments = async () => {

      try {

        const res = await axios.get(
          `http://localhost:5000/comments/${encodeURIComponent(art.title)}`
        );

        setComments(res.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchComments();

  }, [art]);

  // POST COMMENT
  const handleComment = async () => {

    if (!input.trim()) return;

    if (!art?.title) return;

    setLoading(true);

    try {

      const newComment = {
        title: art.title,
        comment: input,
      };

      await axios.post(
        "http://localhost:5000/comments",
        newComment
      );

      // UPDATE UI IMMEDIATELY
      setComments((prev) => [
        ...prev,
        newComment,
      ]);

      setInput("");

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  // NOT FOUND
  if (!art) {
    return (
      <div className="container py-5 text-center">

        <h2>Artwork not found 💀</h2>

        <button
          className="art-back mt-3"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>

      </div>
    );
  }

  return (
    <div className="container py-5">

      {/* BACK */}
      <button
        className="art-back mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {/* CONTENT */}
      <div className="row align-items-center g-5">

        <div className="col-12 col-lg-6">

          <img
            src={art.image}
            alt={art.title}
            className="img-fluid rounded shadow"
          />

        </div>

        <div className="col-12 col-lg-6">

          <h1>{art.title}</h1>

          <p>
            <strong>By {art.artist}</strong>
          </p>

          <p>{art.description}</p>

          <h3 className="my-4">
            ❤️ {art.likes}
          </h3>

          <button
            className="btn btn-dark"
            onClick={() => handleLike(art.id)}
          >
            Like Artwork
          </button>

        </div>
      </div>

     
     
    </div>
  );
}

export default ArtDetails;