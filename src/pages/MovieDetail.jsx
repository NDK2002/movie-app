import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import apiService from "../app/apiServie";
import { API_KEY } from "../app/config";
import { Divider, Typography } from "@mui/material";
import MovieDetailCard from "../components/MovieDetailCard";

function MovieDetail() {
  let auth = useAuth();
  let { movieId } = useParams();
  const [loading, setLoading] = useState();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          `movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
        );
        setMovieDetail(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <Typography variant="h5" mb={2} sx={{ color: "#FFF" }}>
        MOVIE INFO
      </Typography>
      <Divider sx={{ bgcolor: (theme) => theme.palette.grey[500] }} />
      <MovieDetailCard movieDetail={movieDetail} loading={loading} />
    </>
  );
}

export default MovieDetail;
