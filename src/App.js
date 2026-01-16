import React, { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import {getTheme} from "./theme";

import { Box } from "@mui/material";

import Header from "./components/Header";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode(prevMode => {
      if (prevMode === "dark") return "light";
      return "dark";
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} toggleMode={toggleMode} />
      <Box
        sx={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
      <div id="Home">
        <Home />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Education">
        <Education />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <Footer />
      </div>

      </Box>
    </ThemeProvider>
  );
}


export default App;
