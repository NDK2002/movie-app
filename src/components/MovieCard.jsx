import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function MovieCard({ item }) {
  return (
    <Card
      sx={{
        width: "200px",
        height: "300px",
        position: "relative",
        overflow: "hidden",
        "&:hover .movie-details": {
          opacity: 1,
          transform: "translateY(0)",
        },
        "&:hover": {
          transform: "scale(1.2)",
          zIndex: 1,
        },
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <CardActionArea
        component={Link}
        to={`/movie/${item.id}`}
        sx={{ height: "100%" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          sx={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // width: "100%",
            minHeight: "300px",
            // paddingTop: "150%",
          }}
        />
        <Box
          className="movie-details"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "10px",
            transform: "translateY(100%)",
            opacity: 0,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Typography variant="subtitle1" noWrap>
            {item.title}
          </Typography>
          <Typography variant="body2">
            {item.release_date?.split("-")[0]} • {item.vote_average?.toFixed(1)}
            ⭐
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
