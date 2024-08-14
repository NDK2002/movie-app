import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import MovieCard from "../components/MovieCard";

function FavoritePage() {
  let list = JSON.parse(localStorage.getItem("fav"));

  return (
    <>
      <Typography variant="h5" mb={2}>
        YOUR FAVORITES
      </Typography>
      <Divider sx={{ bgcolor: (theme) => theme.palette.grey[500] }} />
      <Grid container direction="row" spacing={5} mt={2}>
        {list?.map((item) => (
          <Grid key={item.id} item xs={6} sm={4} md={3}>
            <MovieCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default FavoritePage;
