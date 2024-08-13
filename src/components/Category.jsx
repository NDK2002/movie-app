import React, { useEffect, useState } from "react";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { API_KEY } from "../app/config";
import apiService from "../app/apiServie";
import CategoryDropdown from "./CategoryDropdown";

function Category() {
  const [loading, setLoading] = useState();
  const [movieList, setMovieList] = useState();
  const [genreId, setGenreId] = useState();
  const [genresList, setGenresList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          `genre/movie/list?api_key=${API_KEY}&language=en-US`
        );
        setGenresList(res.data.genres);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          `discover/movie?api_key=${API_KEY}&include_video=true&language=en-US&with_genres=${genreId}&append_to_response=videos'`
        );
        setMovieList(res.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [genreId]);

  const handleChange = (genreId) => {
    setGenreId(genreId);
  };
  return (
    <>
      <Stack flexDirection="row" alignItems="center">
        <Typography variant="h5" my={3} sx={{ color: "#FFF" }}>
          CATEGORY
        </Typography>
        <CategoryDropdown genresList={genresList} handleChange={handleChange} />
      </Stack>
      <Divider sx={{ bgcolor: (theme) => theme.palette.grey[500] }} />
      <Grid container direction="row" columns={{ xs: 4, sm: 8, md: 12 }}>
        {movieList?.map((movie, i) => (
          <Grid item xs={2} sm={4} md={2} key={i} mt={2}>
            <MovieCard item={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Category;
