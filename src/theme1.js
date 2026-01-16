import { createTheme } from "@mui/material/styles";

const color_list = {
    pink: "#D42B6A",
    green: "#BFD42B",
    teal: "#2BD495",
    blue: "#3B82F6",
    blackish: "#1d1d1f",
    paper: "#FFFFFF",
    grayLight: "#f5f5f7",
    grayDark: "#1E293B",
}


export const getTheme = (mode) => {
  const palette = colors[mode];

  return createTheme({
    palette: {
      mode,

      background: {
        default: palette.background,
        paper: palette.paper,

        // 👇 mode-aware section backgrounds
        sectionPrimary: palette.sectionPrimary,
        sectionSecondary: palette.sectionSecondary,
        sectionAccent: palette.sectionAccent,
      },

      text: {
        primary: palette.primaryText,
        secondary: palette.secondaryText,
      },

      primary: {
        main: palette.primaryAccent,
      },

      secondary: {
        main: palette.secondaryAccent,
      },
      tertiary: {
        main: palette.tertiaryAccent,
      },

      buttonColor: {
        main: palette.button,
        light: palette.buttonHover,
        dark: palette.buttonActive,
      },

      header: {
        main: palette.headerBackground,
        text: palette.headerText,
      },

      highlight: {
        main: palette.secondaryAccent,
      },
    },

    typography: {
      fontFamily: '"Montserrat", sans-serif',
      h1: {
        fontFamily: '"Yeseva One", cursive',
        color: palette.primaryText,
      },
      h2: {
        fontFamily: '"Montserrat", sans-serif',
        color: palette.secondaryText,
      },
      h3: {
        fontFamily: '"Montserrat", sans-serif',
        color: palette.primaryText,
      },
      h5: {
        fontFamily: '"Montserrat", sans-serif',
        color: palette.primaryText,
      },
    },
  });
};
