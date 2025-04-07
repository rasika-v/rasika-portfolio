// src/pages/Projects.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const bounce = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-10px); }
`;

const dots = keyframes`
  0%, 20% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

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

const AnimatedEmoji = styled('span')({
  display: 'inline-block',
  fontSize: '2.5rem',
  margin: '0 10px',
  animation: `${bounce} 1s infinite alternate`,
});

const LoadingDot = styled('span')({
  display: 'inline-block',
  animation: `${dots} 1.5s infinite`,
  fontSize: '2rem',
  color: '#fff', // White dots
});

const Projects = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#fff' }}>
        My Projects
      </Typography>

      <WIPContainer>
        <Typography variant="h5" sx={{ color: '#ff6b6b', mb: 3, fontWeight: 'bold' }}>
          🚧 Under Construction 🚧
        </Typography>

        <Box sx={{ my: 3 }}>
          <AnimatedEmoji sx={{ animationDelay: '0s' }}>👩‍💻</AnimatedEmoji>
          <AnimatedEmoji sx={{ animationDelay: '0.2s' }}>⚡</AnimatedEmoji>
          <AnimatedEmoji sx={{ animationDelay: '0.4s' }}>🔨</AnimatedEmoji>
          <AnimatedEmoji sx={{ animationDelay: '0.6s' }}>✨</AnimatedEmoji>
        </Box>

        <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
          Oops! You caught me in the middle of building something amazing!
        </Typography>

        <Box sx={{ my: 3 }}>
          <Typography variant="h6" component="span" sx={{ color: '#fff' }}>
            Loading awesome projects
          </Typography>
          <LoadingDot sx={{ animationDelay: '0s' }}>.</LoadingDot>
          <LoadingDot sx={{ animationDelay: '0.2s' }}>.</LoadingDot>
          <LoadingDot sx={{ animationDelay: '0.4s' }}>.</LoadingDot>
        </Box>

        <Typography variant="body1" sx={{ color: '#8e8e8e', mt: 3 }}>
          Please check back soon! 🎨
        </Typography>
      </WIPContainer>
    </Container>
  );
};

export default Projects;
