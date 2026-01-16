import React from "react";
import { Grid, Typography } from "@mui/material";
import Section from "../components/Section"; // Wraps content like other pages
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function Experience() {
  return (
    <Section maxWidth="lg" >
      <Typography variant="h2" gutterBottom>
        Experience
      </Typography>
      <Grid container  rowSpacing={6} columnSpacing={{xs:12, sm:10, md:8}}>
        <Grid item size={4} xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{border: 2, borderColor: theme =>theme.palette.buttonColor.green }}>
                <CardContent >
                    <Typography variant="h5" gutterBottom>
                        Software Engineer
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Scotiabank
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        June 2025 Onwards
                    </Typography>
                    <Typography variant="body1">
                        Developing and deploying scalable RESTful APIs using Java Spring Boot, supporting critical banking payment
                        flow operations and improving backend system reliability.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item size={4} xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{border: 2, borderColor: theme =>theme.palette.buttonColor.pink }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Software Engineering Intern
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Scotiabank
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        September 2024 - June 2025
                    </Typography>
                    <Typography variant="body1">
                        Implemented high-quality, reusable, and readable code, applying best-practices in software design and leveraging
                        GitHub Copilot to enhance productivity and code comprehension.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item size={4} xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{border: 2, borderColor: theme =>theme.palette.buttonColor.teal }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Core Network Engineer
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Etisalat Lanka (Pvt) Ltd
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        June 2015 - May 2019
                    </Typography>
                    <Typography variant="body1">
                        Managed and optimized core network infrastructure to ensure seamless VoIP/Data services
                        for over 1 million users. Used network monitoring tools to proactively resolve network issues.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Experience;
