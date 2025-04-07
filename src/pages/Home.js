import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const textVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const codeScrollVariants = {
    initial: { y: 0 },
    animate: {
      y: [-200, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const typewriterVariants = {
    visible: {
      width: ['0%', '100%'],
      transition: {
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container>
        <Box sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
        }}>
          {/* Animated Typewriter Text */}
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              fontFamily: 'monospace',
            }}
          >
            <motion.span
              variants={typewriterVariants}
              initial={{ width: '0%' }}
              animate="visible"
              style={{
                display: 'inline-block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                fontSize: '3rem',
                color: '#fff',
                letterSpacing: '0.05em',
                marginBottom: '0',
              }}
            >
              RASIKA VENKATARAMANAN
            </motion.span>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={textVariants}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                color: '#64ffda',
                textAlign: 'center',
                mb: 6,
                maxWidth: '800px',
                lineHeight: 1.5,
              }}
            >
              Software Developer | Full Stack Developer | Mobile App Developer
            </Typography>
          </motion.div>


            {/* <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                color: '#64ffda',
                textAlign: 'center',
                // mb: 6,
                maxWidth: '800px',
                // lineHeight: 1.5,
              }}
            >
              Master of Science, Computer Science
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                color: '#64ffda',
                textAlign: 'center',
                maxWidth: '800px',
                // lineHeight: 1.5,
              }}
            >
              Bachelor of Technology, Computer Science and Engineering
            </Typography>
     */}

          {/* Device Mockups */}
          <Box sx={{
            display: 'flex',
            gap: 4,
            alignItems: 'center',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            justifyContent: 'center',
            mb: 4,
          }}>
            {/* Desktop Mockup */}
            <motion.div variants={textVariants}>
              <Box sx={{
                width: { xs: '250px', md: '300px' },
                height: { xs: '160px', md: '200px' },
                bgcolor: '#1a1a1a',
                borderRadius: '10px',
                padding: '15px',
                position: 'relative',
                boxShadow: '0 0 20px rgba(255,255,255,0.2)',
                // '&:hover': {
                //   boxShadow: '0 0 30px rgba(255,255,255,0.3)',
                //   transition: 'all 0.3s ease-in-out'
                // }
              }}>
                <Box sx={{
                  width: '100%',
                  height: '100%',
                  bgcolor: '#0a192f',
                  borderRadius: '5px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <motion.div
                    variants={codeScrollVariants}
                    initial="initial"
                    animate="animate"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '200%',
                      opacity: 0.1,
                      color: '#64ffda',
                      fontFamily: 'monospace',
                      fontSize: '10px',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {`const AI = {\n learn() {...}\n predict() {...}\n optimize() {...}\n}`.repeat(20)}
                  </motion.div>
                  <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    style={{
                      display: 'flex',
                      gap: '20px',
                      zIndex: 2
                    }}
                  >
                    <CloudQueueIcon sx={{ fontSize: '2rem', color: '#64ffda' }} />
                    <PsychologyIcon sx={{ fontSize: '2rem', color: '#64ffda' }} />
                  </motion.div>
                </Box>
              </Box>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div variants={textVariants}>
              <Box sx={{
                width: { xs: '80px', md: '100px' },
                height: { xs: '160px', md: '200px' },
                bgcolor: '#1a1a1a',
                borderRadius: '20px',
                padding: '10px',
                position: 'relative',
                boxShadow: '0 0 20px rgba(255,255,255,0.2)',
                // '&:hover': {
                //   boxShadow: '0 0 30px rgba(255,255,255,0.3)',
                //   transition: 'all 0.3s ease-in-out'
                // }
              }}>
                <Box sx={{
                  width: '100%',
                  height: '100%',
                  bgcolor: '#0a192f',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <motion.div
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <CodeIcon sx={{ fontSize: '1.5rem', color: '#64ffda' }} />
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Home;
