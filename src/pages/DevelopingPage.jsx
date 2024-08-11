import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function DevelopingPage() {
  return (
    <Container sx={{ display: "flex", height: "100%", alignItems: "center" }}>
      <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
        <Typography variant="h4" paragraph sx={{ color: "#FFFFFF" }}>
          Coming soon!
        </Typography>
        <Typography sx={{ color: "#FFFFFF", mb: "1rem" }}>
          Sorry, this page is currently under development.
        </Typography>
        <Button to="/" variant="contained" component={RouterLink}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}

export default DevelopingPage;
