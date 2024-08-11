import { CardCover } from "@mui/joy";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function VideoPlayer({ title, video }) {
  return (
    <Box>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Box>
  );
}

export default VideoPlayer;
