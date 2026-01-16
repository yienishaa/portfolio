import Section from "../components/Section";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

function Home() {
  return (
    <Section sx={{ mb: 6 }} bg={"EAF7FB"} >
      <Typography variant="h1" gutterBottom>
        Hi, I'm {' '} <br/>
        <span>{'</'}Yienisha> 👋</span>
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        A passionate Full-Stack Developer.
      </Typography>
      <Box>
        <IconButton sx={{ backgroundColor: theme =>theme.palette.buttonColor.pink, color: '#FFFFFF', mr:2}} ><GitHubIcon fontSize="inherit"/></IconButton>
        <IconButton  sx={{ backgroundColor: theme =>theme.palette.buttonColor.green, color: '#FFFFFF', mr:2}}><LinkedInIcon fontSize="inherit"/></IconButton>
        <IconButton  sx={{ backgroundColor: theme =>theme.palette.buttonColor.teal, color: '#FFFFFF', mr:2}}><EmailIcon fontSize="inherit"/></IconButton>
        <IconButton  sx={{ backgroundColor: theme =>theme.palette.buttonColor.blue, color: '#FFFFFF', mr:2}}><PhoneInTalkIcon fontSize="inherit"/></IconButton>
      </Box>
      <Box>

      </Box>
    </Section>
  );
}

export default Home;
