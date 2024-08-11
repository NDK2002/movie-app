import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import React, { useEffect, useState } from "react";
import apiService from "../app/apiServie";
import { API_KEY } from "../app/config";
import MovieCard from "../components/MovieCard";
import Category from "../components/Category";
import TrendingCardGroup from "../components/TrendingCard";

function HomePage() {
  const [loadingTrending, setLoadingTrending] = useState();
  const [trendingList, setTrendingList] = useState([]);
  const [cutInitial, setCutInitial] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingTrending(true);
        const res = await apiService.get(`trending/all/day?api_key=${API_KEY}`);
        const result = res.data.results;
        setTrendingList(result);
        setCutInitial([...result].splice(16, 4));
        setLoadingTrending(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

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
        <Grid item direction="column" container>
          <TrendingCardGroup
            trendingList={trendingList}
            cutInitial={cutInitial}
            loadingTrending={loadingTrending}
          />
        </Grid>

        <Grid item direction="column" mt={5} container>
          <Category />
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
