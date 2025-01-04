// src/pages/Resume.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Resume = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Resume
      </Typography>
      <Button variant="contained" color="primary" href="/path-to-your-resume.pdf" target="_blank">
        Download Resume
      </Button>
    </Container>
  );
};

export default Resume;
