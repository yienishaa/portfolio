import Section from "../components/Section";
import {Typography, IconButton, Grid, Button} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import EditDocumentIcon from '@mui/icons-material/EditDocument';


function Footer() {
  return (
    <Section sx={{ mb: 6 }}>
      <Typography variant="h1" sx={{ mb: 4, textAlign: 'center' }}>
        Get In Touch
      </Typography>
      <Grid container rowSpacing={6} columnSpacing={{xs:12, sm:10, md:8}}>
          <Grid item xs={12} sm={6} md={4} size={6}>
              <Button variant="contained" sx={{textTransform: "none", width: '100%', backgroundColor: theme =>theme.palette.buttonColor.pink}}
                        href='https://github.com/yienishaa' target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ color: theme =>theme.palette.text.primary }} ><GitHubIcon fontSize="inherit"/></IconButton>
                <Typography sx={{ color: theme =>theme.palette.text.primary }}><strong> github.com/yienishaa </strong></Typography>
              </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} size={6}>
              <Button variant="contained" sx={{ textTransform: "none", width: '100%', backgroundColor: theme =>theme.palette.buttonColor.green }} href='https://www.linkedin.com/in/yienisha/' target="_blank" rel="noopener noreferrer">
                  <IconButton  sx={{ color: theme =>theme.palette.text.primary }}><LinkedInIcon fontSize="inherit"/></IconButton>
                  <Typography sx={{ color: theme =>theme.palette.text.primary }}><strong> linkedin.com/in/yienisha/ </strong></Typography>
              </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} size={6}>
            <Button variant="contained" sx={{ textTransform: "none", width: '100%', backgroundColor: theme =>theme.palette.buttonColor.teal }}  href='mailto:yienisha.abeyratne@gmail.com' target="_blank" rel="noopener noreferrer">
                <IconButton  sx={{ color: theme =>theme.palette.text.primary }}><EmailIcon fontSize="inherit"/></IconButton>
                <Typography sx={{ color: theme =>theme.palette.text.primary }}><strong> yienisha.abeyratne@gmail.com </strong></Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} size={6}>
            <Button variant="contained" sx={{ textTransform: "none", width: '100%', backgroundColor: theme =>theme.palette.buttonColor.blue  }}>
                <IconButton  sx={{ color: theme =>theme.palette.text.primary }}><EditDocumentIcon fontSize="inherit"/></IconButton>
                <Typography sx={{ color: theme =>theme.palette.text.primary }}><strong> View Resume </strong></Typography>
            </Button>
          </Grid>
      </Grid>
    </Section>
  );
}

export default Footer;
