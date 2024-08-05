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
  const [cutList, setCutList] = useState();
  const [copiedList, setcopiedList] = useState([]);

  // function handleList() {
  //   let y;
  //   if (copiedList.length === 0) {
  //     setcopiedList([...trendingList]);
  //     y = [...trendingList].slice(0, 4);
  //     copiedList.splice(0, 4);
  //   } else if (copiedList.length === 4) {
  //     setcopiedList([...trendingList]);
  //     y = copiedList.splice(0, 4);
  //   } else {
  //     y = copiedList.splice(4, 4);
  //   }
  //   return y;
  // }
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
        <Typography variant="h5" mt={3} ml={2} color="#FFFFFF">
          TRENDING
        </Typography>

        {/* <PaginationItem onClick={() => setCutList(handleList())} type="next" /> */}
      </Stack>
      <Divider />
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {loadingTrending ? (
          // placeholder.map((item) => (
          //     <Grid key={item.id} item xs={6} sm={4} md={3}>
          //       {detailSkeleton}
          //     </Grid>
          //   ))
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
          // trendingList.map((item) => <MovieCard item={item} />)
          <Swiper
            spaceBetween={5}
            slidesPerView={"auto"}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 3, spaceBetween: 15 },
              640: { slidesPerView: 4, spaceBetween: 20 },
              960: { slidesPerView: 6, spaceBetween: 25 },
            }}
            modules={[Pagination]}
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
        )}
      </Grid>
    </>
  );
}

export default TrendingCardGroup;
