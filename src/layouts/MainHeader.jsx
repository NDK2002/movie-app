import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useSearchParams } from "react-router-dom";
import {
  alpha,
  Avatar,
  Divider,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { moviesDropdown } from "../components/NavItems";
import { tvShowsDropdown } from "../components/NavItems";
import { peopleDropdown } from "../components/NavItems";
import DropDown from "../components/Dropdown";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

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
  let auth = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(q);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });
  };

  const handleLogout = () => {
    handleClose(); //menu close before signout so that login won't pop up.
    auth.logout();
  };

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
          <Box sx={{ flexGrow: 1 }} />
          <Box component="form" onSubmit={handleSearch}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                name="q"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <IconButton
            component={Link}
            to="/favorite"
            size="large"
            color="inherit"
            children={<StarIcon />}
          />
          <NotificationsIcon sx={{ margin: "8px" }}></NotificationsIcon>

          {/* <Typography variant="h6" color="inherit" component="div">
            {user?.username}
          </Typography> */}
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                <PersonIcon />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                bgcolor: (theme) => theme.palette.grey[850],
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Typography sx={{ color: "#FFF", fontSize: 20, pl: 2, pb: 1 }}>
              {user?.username}
            </Typography>
            <Divider sx={{ bgcolor: (theme) => theme.palette.grey[500] }} />
            <MenuItem onClick={handleLogout} sx={{ color: "#FFF" }}>
              <ListItemIcon>
                <Logout fontSize="small" sx={{ color: "#FFF" }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
