import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PaginationItem from "@mui/material/PaginationItem";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RecommendIcon from "@mui/icons-material/Recommend";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Card, CardActionArea, CardContent, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

function TrendingCardGroup({ trendingList, loadingTrending }) {
  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" color="#FFFFFF">
          TRENDING
        </Typography>
      </Stack>
      <Divider />
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {loadingTrending ? (
          <Stack spacing={2}>
            <Skeleton variant="text" />
            <Skeleton
              animation="wave"
              variant="circular"
              width={200}
              height={300}
            />
          </Stack>
        ) : (
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={5}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 2,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
              }}
              grabCursor
              className="mySwiper"
            >
              {trendingList.map((item, i) => (
                <SwiperSlide
                  key={i}
                  style={{
                    width: "15%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MovieCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </Grid>
    </>
  );
}

export default TrendingCardGroup;
