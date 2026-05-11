const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "modcom2026",
  database: "https://wayneoryx.alwaysdata.net/api/add_product",
});

db.connect((err) => {
  if (err) {
    console.log("DB error:", err);
  } else {
    console.log("MySQL connected");
  }
});

/* =========================
   COMMENTS API
========================= */

// ADD COMMENT
app.post("/api/add_comment", (req, res) => {
  const { title, comment } = req.body;

  const sql =
    "INSERT INTO Comments (title, comment) VALUES (?, ?)";

  db.query(sql, [title, comment], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ success: "Comment saved" });
  });
});

// GET COMMENTS
app.get("/api/get_comments/:title", (req, res) => {
  const title = req.params.title;

  const sql =
    "SELECT * FROM Comments WHERE title = ?";

  db.query(sql, [title], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
});

/* =========================
   START SERVER
========================= */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});