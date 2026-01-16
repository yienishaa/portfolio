import { Box, Container, useTheme } from "@mui/material";

export default function Section({
  children,
  bg = "sectionSecondary",
  maxWidth = "md",
  fullWidth = false,
  sx = {},
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background[bg],
        transition: "background-color 0.3s ease",
        ...sx,
      }}
    >
      {fullWidth ? (
        <Box sx={{ width: "100%" }}>{children}</Box>
      ) : (
        <Container maxWidth={maxWidth}>{children}</Container>
      )}
    </Box>
  );
}
