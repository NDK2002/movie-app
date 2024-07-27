import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const PRIMARY = {
  // lighter: "#99E2F9",
  // light: "#71D7F6",
  main: "#D22F26",
  // dark: "#2D9FC2",
  // darker: "#217791",
  contrastText: "#FFF",
};
const SECONDARY = {
  // lighter: "#D6E4FF",
  // light: "#84A9FF",
  main: "#f44336",
  // dark: "#1939B7",
  // darker: "#091A7A",
  contrastText: "#FFF",
};

const BACKGROUND = {
  default: "#000",
  paper: "#131313",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: "#FFF",
};

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      background: BACKGROUND,
      success: SUCCESS,
    },
    shape: { borderRadius: 8 },
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
