// src/pages/Projects.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2.',
    imageUrl: 'https://via.placeholder.com/150'
  }
];

const Projects = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
