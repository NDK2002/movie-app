import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";
import logoImg from "../assets/the-movie-logo.png";

function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box
      // display="flex"
      // flexDirection="column"
      // alignItems="center"
      // justifyContent="center"
      // height="100vh"
      sx={{ width: 40, height: 40, ...sx }}
    >
      <img src={logoImg} alt="logo" width="100%"></img>
      {/* <Typography variant="h2" component="div" fontWeight="bold">
        The
      </Typography>
      <Typography variant="h2" component="div" fontWeight="bold">
        Movie
      </Typography> */}
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}

export default Logo;
