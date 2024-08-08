import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import RecommendIcon from "@mui/icons-material/Recommend";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

export default function MovieCard({ item }) {
  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.5 }}
      transition={{ type: "tween", stiffness: 400, damping: 10 }}
      className="card"
      sx={{ width: 200, borderRadius: "3px", margin: 5 }}
    >
      <CardActionArea LinkComponent={Link} to={`/movie/${item.id}`}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          sx={[
            {
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.poster_path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "300px",
            },
          ]}
        >
          {/* <Paper className="content">
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                sx={[
                  {
                    maxHeight: "30%",
                    overflow: "hidden",
                  },
                ]}
              ></Box>
            </CardContent>
          </Paper> */}
        </Box>
      </CardActionArea>
    </Card>
  );
}
