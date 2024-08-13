import React, { useEffect, useState } from "react";
import apiService from "../app/apiServie";
import { API_KEY } from "../app/config";

function FavoritePage() {
  const movieId = window.localStorage.getItem("movieId");
  const [loading, setLoading] = useState();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          `movie/movie_id?api_key=${API_KEY}&language=en-US`
        );
        const result = res.data.results;
        movieList(result);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });
  return <div></div>;
}

export default FavoritePage;
