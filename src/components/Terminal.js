import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const AboutMeTerminal = () => {
  return (
    <Box sx={{ padding: 4, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={6} sx={{ 
        backgroundColor: '#212121', 
        color: '#64ffda', //font color
        paddingBottom: 3, 
        maxWidth: 800, 
        fontFamily: 'monospace',
        borderRadius: 2,
        overflow: 'hidden'
      }}>
        {/* Terminal Top Bar */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          backgroundColor: '#424242', 
          padding: '8px 12px',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8
        }}>
          <Box sx={{ 
            width: 12, 
            height: 12, 
            backgroundColor: '#FF605C', 
            borderRadius: '50%', 
            marginRight: 1 
          }} />
          <Box sx={{ 
            width: 12, 
            height: 12, 
            backgroundColor: '#FFBD44', 
            borderRadius: '50%', 
            marginRight: 1 
          }} />
          <Box sx={{ 
            width: 12, 
            height: 12, 
            backgroundColor: '#00CA4E', 
            borderRadius: '50%' 
          }} />
        </Box>

        {/* Terminal Content */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
{`>  Hello, I'm Rasika! 🌟

>  I build websites and mobile apps from scratch (the fun part!).

>  I'm currently pursuing my Master’s degree in Computer Science.

>  With 2+ years of industry experience, I've turned ideas into real-world products.

> Right now, I'm taking an entrepreneurship class and building a startup from scratch.

> What I love most about computer science? It opens doors to every domain.
It lets me learn about new worlds like healthcare, finance, automotive, fashion while still doing what I enjoy: building tech that makes a difference.
`}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutMeTerminal;
