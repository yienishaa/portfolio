import { createTheme } from "@mui/material/styles";


const color_list = {
    pink: "#D42B6A",
    green: "#BFD42B",
    teal: "#2BD495",
    blue: "#402BD4",
    blackish: "#1d1d1f",
    paper: "#FFFFFF",
    grayLight: "#f5f5f7",
    grayDark: "#1E293B",
}

export const colorTokens = {
  light: {
    primary: color_list.green,
    secondary: color_list.pink,
    info: color_list.blue,
    background: color_list.grayLight,
    paper: color_list.paper,
    textPrimary: color_list.blackish,
    pink: color_list.pink,
    green: color_list.green,
    teal: color_list.teal,
    blue: color_list.blue,
  },
  dark: {
    primary: color_list.green,
    secondary: color_list.pink,
    info: color_list.blue,
    background: color_list.grayDark,
    paper: color_list.grayDark,
    textPrimary: '#ffffff',
    pink: color_list.pink,
    green: color_list.green,
    teal: color_list.teal,
    blue: color_list.blue,
  },
};

export const getTheme = (mode: 'light' | 'dark') => {
  const colors = colorTokens[mode];
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      info: {
        main: colors.info,
      },
      background: {
        default: colors.background,
        paper: colors.paper,
      },
      text: {
        primary: colors.textPrimary,
      },
      buttonColor: {
        main: colors.primary,
        light: colors.info,
        pink: colors.pink,
        green: colors.green,
        teal: colors.teal,
        blue: colors.blue,
      },
    },
    customShadows: {
      glow: isDark
        ? `
          -15px -15px 30px ${colors.blue}66,
          15px -15px 30px ${colors.pink}66,
          -15px 15px 30px ${colors.teal}66,
          15px 15px 30px ${colors.green}66
        `
        : `
          -20px -20px 40px ${colors.blue}33,
          20px -20px 40px ${colors.pink}33,
          -20px 20px 40px ${colors.teal}33,
          20px 20px 40px ${colors.green}33
        `,
      cardRest: mode === "dark"
          ? "0 6px 18px rgba(0,0,0,0.6)"
          : "0 6px 16px rgba(0,0,0,0.15)",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    transition: "filter 150ms ease-in-out",
                    "&:hover": {
                        filter: "brightness(0.85)",
                    },
                },
            },
        }
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
      h1: {
        fontFamily: '"Yeseva One", cursive',
        color: colors.textPrimary,
      },
      h2: { color: colors.textPrimary },
      h3: { color: colors.textPrimary },
      h5: { color: colors.textPrimary },
    },
  });
};
