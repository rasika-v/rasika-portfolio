import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// import CustomizedTimeline from '../components/Timeline';

const WIPContainer = styled(Box)({
  textAlign: 'center',
  padding: '3rem',
  backgroundColor: '#1a1a1a', // Darker background
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  margin: '2rem auto',
  maxWidth: '800px',
  border: '2px solid #333',
});

const About = () => {

  return (
    <Container>
      <WIPContainer>
        <Box sx={{
          // minHeight: '100vh',
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          // gap: 6
        }}>
          {/* <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}> */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 4
            }}
          >
            Hey there! 👋
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              lineHeight: 1.8,
              color: 'text.primary',
              marginBottom: 3,
              '& span': {
                color: 'primary.main',
                fontWeight: 'bold'
              }
            }}
          >
            I'm a developer who loves bringing ideas to life through code.


            {/* With <span>2.5 years of full-stack experience</span> as a Software Consultant at <span>Mercedes-Benz</span>, I've mastered both web and mobile development using React, React Native, and Flutter to create impactful applications. */}
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              lineHeight: 1.8,
              color: 'text.secondary',
              marginBottom: 3,
              '& span': {
                color: 'primary.main',
                fontWeight: 'bold'
              }
            }}
          >
            My journey in tech began during my undergraduate years, where I worked on a project - the <span>Pothole Detection Application</span>.
            This innovative solution won the <span>Smart India Hackathon 2020</span>, securing funding from AICTE and MHRD.
            The project's impact earned recognition as <span>IEEE Bangalore's Best Humanitarian Project</span>, led to a publication in the IEEE journal which I presented at IIT Guwahati, and currently has a patent pending.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              lineHeight: 1.8,
              color: 'text.secondary',
              marginBottom: 3,
              '& span': {
                color: 'primary.main',
                fontWeight: 'bold'
              }
            }}
          >
            My professional journey at <span>Mercedes-Benz</span> started as an internship during my final semester, where I discovered my passion for React development. This experience evolved into a full-time role, allowing me to work with cutting-edge technologies and contribute to world-class automotive software solutions.
            I worked at Mercedes-Benz for 2.5 years before starting my next chapter.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              lineHeight: 1.8,
              color: 'text.secondary',
              '& span': {
                color: 'primary.main',
                fontWeight: 'bold'
              }
            }}
          >
            Currently pursuing my <span>Master's in Computer Science</span> while holding a <span>Bachelor's in Computer Science and Engineering</span>, I combine academic knowledge with practical skills to build innovative solutions.
            Whether it's crafting responsive websites or developing intuitive mobile apps, I'm always excited about pushing the boundaries of what's possible in software development.
          </Typography>
        </Box>
      </WIPContainer>
    </Container>
  );
};

export default About;
