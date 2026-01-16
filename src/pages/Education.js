import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import Section from "../components/Section"; // Wraps content like other pages

function Education() {
  return (
    <Section bg="#EAF7FB" maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Education
      </Typography>

      <Grid container spacing={8} rowSpacing={6} columnSpacing={{xs:12, sm:10, md:8}}>
        {/* York University */}
        <Grid item size={3} >
          <Avatar
            src={`${process.env.PUBLIC_URL}/YorkULogo_DIGITAL_Ver_RGB.png`}
            alt="York University Logo"
            sx={{ width: 110, height: 115, bgcolor: "#FFFFFF", border:5, borderColor:"#FFFFFF" }}
            variant="square"
          />
        </Grid>
        <Grid item size={9} sx={{ display: "flex", alignItems: "center",}}>
          <Box>
            <Typography variant="h6">
              York University
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Bachelor of Science (Honors) in Computer Science
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2021 — 2025
            </Typography>
          </Box>
        </Grid>

              {/* SHU University */}
        <Grid item size={3}>
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Sheffield_Hallam_University_logo.svg"
              alt="Sheffielfd Hallam University"
              sx={{ width: 110, height: 60, bgcolor: "transparent", }}
              variant="square"
            />
        </Grid>
        <Grid item size={9} sx={{ display: "flex", alignItems: "center", gap: 6, }}>
            <Box>
              <Typography variant="h6">
                Sheffielfd Hallam University
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Bachelor of Engineering (Honors) in Electronic Engineering
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2013 — 2015
              </Typography>
            </Box>
        </Grid>

        <Grid item size={3}>
            <Avatar
              src={`${process.env.PUBLIC_URL}/SLIIT_Logo_Crest-2.png`}
              alt="Sheffielfd Hallam University"
              sx={{ width: 120, height: 150, bgcolor: "transparent", }}
              variant="square"
            />
        </Grid>
        <Grid item size={9} sx={{ display: "flex", alignItems: "center", gap: 6, }}>
            <Box>
              <Typography variant="h6">
                Sri Lanka Institute of Information Technology
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Diploma in Engineering
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2011 — 2013
              </Typography>
            </Box>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Education;
