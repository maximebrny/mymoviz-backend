var express = require("express");
var router = express.Router();

const API_KEY = process.env.OWN_API_KEY;

router.get("/movies", async (req, res) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  );
  const data = await response.json();
  res.send(data.results);
});

module.exports = router;
