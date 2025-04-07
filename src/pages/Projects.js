import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Chip, Button, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import TerminalIcon from '@mui/icons-material/Terminal';

const projects = [
  {
    title: 'Pothole Detection and Alerting App 🚨 ',
    description: 'Mobile app to capture and detect potholes using inbuilt mobile sensors and mobile camera',
    techStack: ['Flutter', 'Python', 'Flask', 'Deep Learning', 'YOLOv3'],
    funFact: '🏆 Winning Project of Smart India Hackathon, 2020 and IEEE Student Humanitarian Project Funding. ',
    github: 'https://github.com/rasika-v/DR112_EnigmaD',
    // publication: 'https://ieeexplore.ieee.org/document/9691661'
  },
  {
    title: 'Startup Idea Generator - Card Game',
    description: 'Find your next startup idea though a quick card game.',
    techStack: ['HTML', 'CSS', 'PHP'],
    funFact: 'We came up with this while struggling to come up with a startup idea for an entrepreneurship class!😋',
    github: 'https://github.com/rasika-v/CardGame',
    // demo: 'https://foodiefinder.app'
  },
  // {
  //   title: 'StartupHub 🚀',
  //   description: 'A dashboard to help founders manage everything.',
  //   techStack: ['Next.js', 'AWS', 'GraphQL'],
  //   funFact: 'Inspired by my own startup journey. 📈',
  //   github: 'https://github.com/yourusername/startuphub',
  //   demo: 'https://startuphub.io'
  // },
  // Add more projects here!
];

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Projects = () => {
  return (
    <Container>
      <Box sx={{
        minHeight: '100vh',
        py: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }}>
        <motion.div
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#fff',
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <TerminalIcon sx={{ color: '#64ffda' }} />
            Projects
          </Typography>

          {/* Grid Layout for multiple projects */}
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  variants={scrollVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-100px" }}
                >
                  <Card sx={{
                    bgcolor: '#1a1a1a',
                    color: '#fff',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: 3,
                    borderRadius: 2,
                    boxShadow: '0 0 20px rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 0 30px rgba(100,255,218,0.2)',
                      transform: 'translateY(-5px)'
                    }
                  }}>
                    <CardContent>
                      <Typography variant="h5" sx={{ color: '#64ffda', mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.techStack.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            variant="outlined"
                            sx={{
                              borderColor: '#64ffda',
                              color: '#64ffda'
                            }}
                          />
                        ))}
                      </Box>
                      <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                        {project.funFact}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', mt: 2 }}>
                      <Button
                        size="small"
                        href={project.github}
                        target="_blank"
                        variant="outlined"
                        sx={{
                          borderColor: '#64ffda',
                          color: '#64ffda',
                          '&:hover': {
                            backgroundColor: 'rgba(100,255,218,0.1)'
                          }
                        }}
                      >
                        GitHub
                      </Button>
                      {/* <Button
                        size="small"
                        href={project.demo}
                        target="_blank"
                        variant="contained"
                        sx={{
                          backgroundColor: '#64ffda',
                          color: '#0a192f',
                          '&:hover': {
                            backgroundColor: '#52e0c4'
                          }
                        }}
                      >
                        Live Demo
                      </Button> */}
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Projects;
