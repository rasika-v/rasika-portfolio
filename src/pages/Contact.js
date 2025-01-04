import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const Contact = () => {
  const iconVariants = {
    hover: {
      y: -3,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      gap: 2,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Tooltip title="GitHub" arrow>
        <motion.div whileHover="hover" variants={iconVariants}>
          <IconButton
            href="https://github.com/rasika-v"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              '&:hover': {
                color: '#64ffda',
              }
            }}
          >
            <GitHubIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </motion.div>
      </Tooltip>

      <Tooltip title="LinkedIn" arrow>
        <motion.div whileHover="hover" variants={iconVariants}>
          <IconButton
            href="https://linkedin.com/in/rasika-v"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              '&:hover': {
                color: '#64ffda',
              }
            }}
          >
            <LinkedInIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </motion.div>
      </Tooltip>
    </Box>
  );
};

export default Contact;
