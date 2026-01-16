import { Card, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function DepthCard({
  children,
  width = "100%",
  height = 300,
  popDepth = 40,
  scale = 1.03,
  tilt = 3,
  transition = "0.35s ease",
  sx = {},
  ...props
}) {
  const theme = useTheme();

  // Resting shadow
  const restShadow = theme.customShadows?.cardRest  ?? "0 6px 18px rgba(0,0,0,0.15)";


  return (
    <Box
      sx={{
        perspective: "1000px",
        display: "block",
        width: "100%",
      }}
    >
      <Card
        {...props}
        sx={{
          width,
          height,
          display: "flex",          // Added
          flexDirection: "column",   // Added
          justifyContent: "space-between", // Added (optional safety)
          transformStyle: "preserve-3d",
          transition: `transform ${transition}, box-shadow ${transition}`,
          boxShadow: restShadow,
          cursor: "pointer",

          "&:hover": {
            transform: `translateZ(${popDepth}px) scale(${scale}) rotateX(${tilt}deg)`,
            boxShadow: theme.customShadows.glow,
          },

          "&:active": {
            transform: `translateZ(${popDepth - 20}px) scale(0.98)`,
          },

          "&:focus-visible": {
            transform: `translateZ(${popDepth}px) scale(${scale})`,
            outline: "2px solid",
            outlineColor: "primary.main",
          },

          "@media (hover: none)": {
            "&:hover": {
              transform: "none",
              boxShadow: restShadow,
            },
          },

          ...sx,
        }}
      >
        {children}
      </Card>
    </Box>
  );
}
