import Section from "../components/Section";
import { Box, Typography, Grid, Button } from "@mui/material";
import {DiPython, DiJava, DiReact, DiPhp, DiLinux, DiMsqlServer, DiCss3} from 'react-icons/di';
import { TiHtml5 } from 'react-icons/ti';
import { FaAws, FaNode } from "react-icons/fa";
import { SiJavascript, SiMysql, SiCplusplus, SiTwilio, SiMui, SiChakraui, SiOpencv, SiNumpy, SiJupyter, SiApachekafka } from 'react-icons/si';


function Skills() {

    const icons = [
      { component: DiJava, name: "Java" },
      { component: DiPython, name: "Python" },
      { component: TiHtml5, name: "HTML5" },
      { component: DiCss3, name: "CSS3" },
      { component: SiJavascript, name: "JavaScript" },
      { component: DiReact, name: "React" },
      { component: FaNode, name: "Node.js" },
      { component: DiPhp, name: "PHP" },
      { component: SiCplusplus, name: "C++" },
      { component: SiMysql, name: "MySQL" },
      { component: DiLinux, name: "Linux" },
      { component: DiMsqlServer, name: "MS SQL Server" },
      { component: SiTwilio, name: "Twilio" },
      { component: SiMui, name: "MUI" },
      { component: SiChakraui, name: "Chakra UI" },
      { component: SiOpencv, name: "OpenCV" },
      { component: SiNumpy, name: "NumPy" },
      { component: SiJupyter, name: "Jupyter" },
      { component: SiApachekafka, name: "Kafka" },
      { component: FaAws, name: "AWS" },
    ];

  return (
    <Section sx={{ mb: 6 }} bg={"#F9FBEA"} maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        What I do
      </Typography>
      <Typography variant="h6" color="text.primaryAccent" gutterBottom>
        Developer who wants to explore every tech stack!!!
      </Typography>
      <Box>
        <Grid container spacing={4}>
            {icons.map((iconObj, i) => {
                const Icon = iconObj.component;
                return (
                <Grid item xs={6} sm={4} md={3} key={i}>
                    <Button
                    sx={{ color: theme =>theme.palette.buttonColor.green}}>
                        <Icon size={60} />
                    </Button>
                    <Typography variant="subtitle1" align="center">
                        {iconObj.name}
                    </Typography>
                </Grid>
            );
            })}
        </Grid>
      </Box>

    </Section>
  );
}

export default Skills;
