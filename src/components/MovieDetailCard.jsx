import {
  Alert,
  Avatar,
  Box,
  Chip,
  Divider,
  IconButton,
  Skeleton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import RecommendIcon from "@mui/icons-material/Recommend";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VideoPlayer from "./VideoPlayer";
import { useParams } from "react-router-dom";

function MovieDetailCard({ movieDetail, loading }) {
  let { movieId } = useParams();
  const [showAlert, setShowAlert] = useState(false);
  const officialTrailer = movieDetail?.videos?.results?.find(
    (element) =>
      element.name.includes("Official Trailer") ||
      element.name.includes("Trailer")
  );

  const addFavMovie = (title, poster, release, voteA, id) => {
    let list = JSON.parse(localStorage.getItem("fav")) || [];

    const movieExists = list.some((movie) => movie.id === id);

    if (!movieExists) {
      list.push({
        id: id,
        original_title: title,
        poster_path: poster,
        release_date: release,
        vote_average: voteA,
      });

      localStorage.setItem("fav", JSON.stringify(list));
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const detailSkeleton = (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Stack>
  );
  return (
    <>
      {loading ? (
        detailSkeleton
      ) : movieDetail ? (
        <Stack
          minWidth="80%"
          flexDirection={{ xs: "column", md: "row" }}
          sx={{ borderRadius: "10px" }}
        >
          <Stack
            my={3}
            minWidth="350px"
            sx={{
              borderRadius: "10px",
            }}
          >
            <Box>
              <img
                alt={`${movieDetail.original_title}`}
                height="500px"
                src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Stack>

          <Stack
            my={3}
            pl={{ xs: 0, md: 1 }}
            minHeight="100%"
            minWidth="400px"
            justifyContent="space-between"
          >
            <Stack
              justifyContent="space-between"
              alignItems="center"
              flexDirection="row"
            >
              <Typography
                mb={1}
                variant="h6"
                sx={{ color: "#FFF", fontSize: "36px" }}
              >
                {`${movieDetail.original_title} (${
                  movieDetail.release_date?.split("-")[0]
                })`}
              </Typography>
              <Stack flexDirection="column" alignItems="end">
                <IconButton
                  onClick={() =>
                    addFavMovie(
                      movieDetail.original_title,
                      movieDetail.poster_path,
                      movieDetail.release_date,
                      movieDetail.vote_average,
                      movieId
                    )
                  }
                  size="large"
                  children={
                    <StarIcon fontSize="large" sx={{ color: "#FFF" }} />
                  }
                  sx={{
                    backgroundColor: "rgba(225,0,0,0.9)",
                    marginRight: "30px",
                  }}
                />
                <Snackbar
                  open={showAlert}
                  autoHideDuration={6000}
                  onClose={handleCloseAlert}
                >
                  <Alert
                    onClose={handleCloseAlert}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%", bgcolor: "#FFF" }}
                  >
                    Movie added to favorites successfully!
                  </Alert>
                </Snackbar>
              </Stack>
            </Stack>
            <Stack my={{ xs: 2, md: 0 }}>
              <Typography variant="body" sx={{ color: "#FFF" }}>
                {`${movieDetail.overview}`}
              </Typography>
            </Stack>

            <Stack
              my={{ xs: 2, md: 1 }}
              flexDirection="row"
              alignItems="center"
            >
              <Typography mr={1} variant="caption" sx={{ color: "#FFF" }}>
                Genres
              </Typography>
              {movieDetail.genres.map((item) => (
                <Chip
                  key={`${item.id}`}
                  label={`${item.name}`}
                  size="small"
                  variant="outlined"
                  sx={{ color: "#FFF" }}
                />
              ))}
            </Stack>
            <Stack
              my={{ xs: 2, md: 1 }}
              flexDirection="row"
              alignItems="center"
              flexWrap="wrap"
            >
              <Typography mr={1} variant="caption" sx={{ color: "#FFF" }}>
                Companies
              </Typography>
              {movieDetail.production_companies
                .filter((item) => item.logo_path !== null)
                .map((item) => (
                  <Chip
                    sx={{
                      color: "#FFF",
                      bgcolor: (theme) => theme.palette.grey[750],
                    }}
                    key={`${item.id}`}
                    avatar={
                      <Avatar
                        alt="Natacha"
                        src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                      />
                    }
                    label={`${item.name}`}
                    size="small"
                    variant="filled"
                  />
                ))}
            </Stack>
            <Stack
              my={{ xs: 2, md: 1 }}
              flexDirection="row"
              alignItems="center"
            >
              <Typography mr={1} variant="caption" sx={{ color: "#FFF" }}>
                Released:
              </Typography>
              <Chip
                sx={{ color: "#FFF" }}
                label={`${movieDetail.release_date}`}
                size="small"
                variant="outlined"
              />
            </Stack>

            <Stack flexDirection="row" justifyContent="flex-end" mt={1}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                mr={3}
              >
                <RecommendIcon className="recommend_icon" fontSize="small" />
                <Typography variant="subtitle2" ml={1}>
                  {`${movieDetail.vote_count}`}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="center">
                <FavoriteIcon className="favorite_icon" fontSize="small" />
                <Typography variant="subtitle2" ml={1}>
                  {`${movieDetail.vote_average}`}
                </Typography>
              </Box>
              <Stack>
                <VideoPlayer
                  title={movieDetail.title}
                  video={officialTrailer?.key}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Typography variant="h4" m={5}>
          Movie not found!
        </Typography>
      )}

      <Divider sx={{ bgcolor: (theme) => theme.palette.grey[500] }} />
    </>
  );
}

export default MovieDetailCard;
