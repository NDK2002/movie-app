import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from "react-router-dom";
import {
  alpha,
  Button,
  InputBase,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { moviesDropdown } from "../components/NavItems";
import { tvShowsDropdown } from "../components/NavItems";
import { peopleDropdown } from "../components/NavItems";
import DropDown from "../components/Dropdown";

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  padding: "8px",
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function MainHeader() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: (theme) => theme.palette.grey[900] }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo sx={{ width: "100px" }} />
          </IconButton>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <DropDown name="Movies" menuItem={moviesDropdown} />
          <DropDown name="TV Shows" menuItem={tvShowsDropdown} />
          <DropDown name="People" menuItem={peopleDropdown} />
          {/* <Link style={linkStyle}>Movies</Link>
          <Link style={linkStyle}>TV Shows</Link>
          <Link style={linkStyle}>People</Link>
          <Link style={linkStyle}>My List</Link> */}
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              name="q"
              // value={searchQuery}
              // onChange={handleChange}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <NotificationsIcon sx={{ margin: "8px" }}></NotificationsIcon>
          <Typography variant="h6" color="inherit" component="div">
            {user?.username}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
