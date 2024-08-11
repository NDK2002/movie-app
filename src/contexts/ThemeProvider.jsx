import { alpha, CssBaseline } from "@mui/material";
import { blue } from "@mui/material/colors";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const PRIMARY = {
  main: "#D22F26",
  contrastText: "#FFF",
};
const SECONDARY = {
  main: "#f44336",
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

const GREY = {
  10: "#E5E5E5",
  20: "#DCDCDC",
  25: "#D2D2D2",
  50: "#BCBCBC",
  100: "#B3B3B3",
  150: "#979797",
  200: "#808080",
  250: "#777777",
  300_40: alpha("#6D6D6E", 0.4),
  300_70: alpha("#6D6D6E", 0.7),
  350: "#545454",
  400: "#414141",
  450: "#404040",
  500: "#3A3A3A",
  550: "#363636",
  600_60: alpha("#333333", 0.6),
  600: "#333333",
  650: "#2F2F2F",
  700: "#2A2A2A",
  750: "#262626",
  800: "#232323",
  850: "#181818",
  900: "#141414",
};

const BLUE = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  900: "#003A75",
};

const TRANSPARENT_WHITE = {
  15: alpha("#FFFFFF", 0.15),
  20: alpha("#FFFFFF", 0.2),
  30: alpha("#FFFFFF", 0.3),
  35: alpha("#FFFFFF", 0.35),
  50: alpha("#FFFFFF", 0.5),
  70: alpha("#FFFFFF", 0.7),
};

const TRANSPARENT_BLACK = {
  30: alpha("#000000", 0.3),
  60: alpha("#000000", 0.6),
  90: alpha("#000000", 0.9),
};

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      background: BACKGROUND,
      success: SUCCESS,
      grey: GREY,
      blue: BLUE,
      transparent_while: TRANSPARENT_WHITE,
      transparent_black: TRANSPARENT_BLACK,
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
