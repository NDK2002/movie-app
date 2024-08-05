import React, { useState } from "react";
import { moviesDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  padding: "8px",
};

function DropDown({ name, menuItem }) {
  const [dropdown, setDropdown] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        sx={{ color: "#FFFFFF", textTransform: "capitalize" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItem &&
          menuItem.map((item) => {
            return (
              <MenuItem onClick={handleClose} key={item.id}>
                <Link to={item.path} style={linkStyle}>
                  {item.title}
                </Link>
              </MenuItem>
            );
          })}
      </Menu>
    </>
  );
}

export default DropDown;
