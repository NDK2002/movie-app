import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import apiService from "../app/apiServie";
import { API_KEY } from "../app/config";

import Category from "../components/Category";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import TrendingCard from "../components/trendingcard/index";

function HomePage() {
  const [loadingTrending, setLoadingTrending] = useState();
  const [trendingList, setTrendingList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingTrending(true);
        const res = await apiService.get(`trending/all/day?api_key=${API_KEY}`);
        const result = res.data.results;
        setTrendingList(result);
        setLoadingTrending(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingTrending(true);
        const res = await apiService.get(
          `search/movie?api_key=${API_KEY}&query=${q}`
        );
        setMovieList(res.data.results);
        setLoadingTrending(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [q]);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent={{ md: "center", xs: "flex-end" }}
        sx={
          {
            // minHeight: "100vh",
          }
        }
      >
        {q ? (
          <Grid container direction="row" columns={{ xs: 4, sm: 8, md: 12 }}>
            {movieList?.map((movie, i) => (
              <Grid item xs={2} sm={4} md={2} key={i} mt={2} mr={2}>
                <MovieCard item={movie} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            <Grid item direction="column" container>
              <TrendingCard
                trendingList={trendingList}
                loadingTrending={loadingTrending}
              />
            </Grid>

            <Grid item direction="column" mt={5} container>
              <Category />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}

export default HomePage;
