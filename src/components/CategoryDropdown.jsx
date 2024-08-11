import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { color } from "framer-motion";
import React, { useState } from "react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#fff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

function CategoryDropdown({ genresList, handleChange }) {
  const [genres, setGenres] = useState("");

  // const handleChange = (e) => {
  //   setGenres(e.target.value);
  // };
  return (
    <Box
      sx={{ minWidth: 120, bgcolor: (theme) => theme.palette.grey[800] }}
      ml={2}
    >
      <FormControl fullWidth>
        <Select
          sx={{
            color: "#FFF",
            borderColor: "#FFF",
            " .MuiSelect-icon": {
              color: "#FFF",
            },
          }}
          labelId="customized-select-label"
          id="customized-select"
          value={genres}
          onChange={(e) => handleChange(e.target.value)}
          input={<BootstrapInput />}
          renderValue={
            genres !== ""
              ? undefined
              : () => <span style={{ color: "#FFF" }}>Select category...</span>
          }
          displayEmpty
        >
          {genresList?.map((item) => (
            <MenuItem value={item.id} key={item.id} sx={{ color: "#FFF" }}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CategoryDropdown;
