import React from "react";
import {Typography, Grid, Stack } from "@mui/material";
import Section from "../components/Section"; // Wraps content like other pages
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DepthCard from "../components/DepthCard";
import CircleIcon from '@mui/icons-material/Circle';
import { BiGitMerge } from "react-icons/bi";


function Projects() {
  return (
    <Section maxWidth="lg" bg="#ECEAFB">
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>
      <Grid container rowSpacing={6} columnSpacing={{xs:12, sm:10, md:8}}s>
        <Grid item size={4} xs={12} sm={6} md={4}>
            <DepthCard width="100%" >
                <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{mb:3}}>
                        <BiGitMerge fontSize="35"/>
                        <Typography variant="h5"> pub-sub-project</Typography>
                    </Stack>
                    <Typography>🚀 Kafka integrated project with a simple producer and consumer.</Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2, display: 'flex' }}>
                    <CircleIcon sx={{ color: '#b07219', fontSize: 15}}/>
                    <Typography sx={{color: 'gray', fontSize:14}}>Java</Typography>
                </CardActions>
            </DepthCard>
        </Grid>
        <Grid item size={4} xs={12} sm={6} md={4}>
            <DepthCard width="100%">
                <CardContent >
                    <Stack direction="row" spacing={1} alignItems="center" sx={{mb:3}}>
                        <BiGitMerge fontSize="35"/>
                        <Typography variant="h5"> green-charge-auto</Typography>
                    </Stack>
                    <Typography>🚘 E-Commerce website for a car dealership</Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2, display: 'flex' }}>
                    <CircleIcon sx={{color: '#f1e05a', fontSize: 15}}/>
                    <Typography sx={{color: 'gray', fontSize:14}}>JavaScript</Typography>
                    <CircleIcon sx={{ color: '#e34c26', fontSize: 15}}/>
                    <Typography sx={{color: 'gray', fontSize:14 }}>HTML</Typography>
                    <CircleIcon sx={{ color: '#663399', fontSize: 15}}/>
                    <Typography sx={{color: 'gray', fontSize:14 }}>CSS</Typography>
                    <CircleIcon sx={{color: '#b07219', fontSize: 15}}/>
                    <Typography sx={{color: 'gray', fontSize:14}}>Java</Typography>
                </CardActions>
            </DepthCard>
        </Grid>
        <Grid item size={4} xs={12} sm={6} md={4}>
            <DepthCard width="100%">
                <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{mb:3}}>
                        <BiGitMerge fontSize="35"/>
                        <Typography variant="h5"> 6-degrees-of-Kevin-Bacon</Typography>
                    </Stack>
                  <Typography>👥👥 Finding the shortest path between Kevin Bacon and a given actor (via shared movies)</Typography>
                </CardContent>
                <CardActions sx={{fontSize: 20}}>
                    <CircleIcon sx={{color: '#b07219', fontSize: 15}}/>
                    <Typography sx={{ml:1}}>Java</Typography>
                </CardActions>
            </DepthCard>
        </Grid>
        <Grid item size={4} xs={12} sm={6} md={4}>
            <DepthCard width="100%" >
                <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{mb:3}}>
                        <BiGitMerge fontSize="35"/>
                        <Typography variant="h5"> three-musketeers</Typography>
                    </Stack>
                    <Typography>🎩 This assignment's major learning goal is inversion of control and to create a GUI version of Three Musketeers game</Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2, display: 'flex' }}>
                    <CircleIcon sx={{ color: '#b07219', fontSize: 15}}/>
                    <Typography sx={{color: 'gray', fontSize:14}}>Java</Typography>
                </CardActions>
            </DepthCard>
        </Grid>
        <Grid item size={4} xs={12} sm={6} md={4}>
            <DepthCard width="100%" >
                <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{mb:3}}>
                        <BiGitMerge fontSize="35"/>
                        <Typography variant="h5"> computer-vision-mini-projects</Typography>
                    </Stack>
                    <Typography>👀 This repo contains the mini-projects I did in the computer vision course.</Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2, display: 'flex' }}>
                    <CircleIcon sx={{ color: '#DA5B0B', fontSize: 15}}/>
                    <Typography sx={{color: 'gray', fontSize:14}}>Jupyter Notebook</Typography>
                    <CircleIcon sx={{ color: '#3572A5', fontSize: 15}}/>
                    <Typography sx={{color: 'gray', fontSize:14}}>Python</Typography>
                </CardActions>
            </DepthCard>
        </Grid>
        <Grid item size={4} xs={12} sm={6} md={4}>
            <DepthCard width="100%" >
                <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{mb:3}}>
                        <BiGitMerge fontSize="35"/>
                        <Typography variant="h5"> personal-portfolio</Typography>
                    </Stack>
                    <Typography>🦄 This repo contains the code for this website ✌️</Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2, display: 'flex' }}>
                    <CircleIcon sx={{color: '#f1e05a', fontSize: 15}}/>
                    <Typography sx={{color: 'gray', fontSize:14}}>JavaScript</Typography>
                    <CircleIcon sx={{ color: '#e34c26', fontSize: 15}}/>
                    <Typography sx={{color: 'gray', fontSize:14 }}>HTML</Typography>
                    <CircleIcon sx={{ color: '#663399', fontSize: 15}}/>
                    <Typography sx={{color: 'gray', fontSize:14 }}>CSS</Typography>
                </CardActions>
            </DepthCard>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Projects;
