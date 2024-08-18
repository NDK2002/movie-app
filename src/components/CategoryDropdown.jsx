import {
  Box,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
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

  useEffect(() => {
    if (genresList?.length) {
      setGenres(genresList[4].id);
      handleChange(genresList[4].id);
    }
  }, [genresList, handleChange]);

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
          onChange={(e) => {
            setGenres(e.target.value);
            handleChange(e.target.value);
          }}
          input={<BootstrapInput />}
          renderValue={genres !== "" ? undefined : () => "Select category..."}
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
