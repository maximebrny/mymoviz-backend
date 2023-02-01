var express = require("express");
var router = express.Router();
// const fetch = require("node-fetch");

const movieAPIKey = process.env.MOVIEDB_API_KEY;

router.get("/movies", (req, res) => {
  fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=${movieAPIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    .then((response) => response.json())
    .then((movies) => res.json({ movies: movies.results }));
});

module.exports = router;
