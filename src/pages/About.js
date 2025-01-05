import React from 'react';
import { Container, Typography, Box } from '@mui/material';
// import CustomizedTimeline from '../components/Timeline';


const About = () => {

  return (
    <Container>
      <Box sx={{
        // minHeight: '100vh',
        py: 8,
        display: 'flex',
        flexDirection: 'column',
        // gap: 6
      }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Hey there! 👋
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            lineHeight: 1.6,
            color: 'text.primary',
            marginBottom: 3
          }}
        >
          I'm a developer who loves bringing ideas to life through code. My journey in tech has led me to master both web and mobile development, using React, React Native, and Flutter to create impactful applications.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            lineHeight: 1.6,
            color: 'text.secondary',
            '& span': {
              color: 'primary.main',
              fontWeight: 'bold'
            }
          }}
        >
          With a Bachelor's in <span>Computer Science and Engineering</span> and currently working on my <span>Master's in Computer Science</span>, I combine academic knowledge with practical skills to build innovative solutions.
        </Typography>

      </Box>
    </Container>
  );
};

export default About;
