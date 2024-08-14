import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/material";
// import "../App.css";

function TrendingCard({ trendingList, loadingTrending }) {
  const placeholder = [0, 1, 2, 3];
  const detailSkeleton = (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Stack>
  );
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
          <Stack spacing={2} direction="row" width="100%">
            {placeholder.map((item) => (
              <Box key={item} sx={{ width: "200px" }}>
                {detailSkeleton}
              </Box>
            ))}
          </Stack>
        ) : (
          <Box
            className="boxView"
            sx={{
              width: "100%",
              position: "relative",
              zIndex: 1,
              alignItems: "center",
            }}
          >
            <Swiper
              slidesPerView="auto"
              spaceBetween={5}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
              }}
              grabCursor
              className="mySwiper"
              style={{ overflow: "visible", alignItems: "center" }}
            >
              {trendingList.map((item, i) => (
                <SwiperSlide key={i} style={{ alignItems: "center" }}>
                  <MovieCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        )}
      </Grid>
    </>
  );
}

export default TrendingCard;
