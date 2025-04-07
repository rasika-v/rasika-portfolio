import React from 'react';
import { Container, Typography, Box, Card, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Education = () => {
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

  const education = [
    {
      degree: "Master of Science, Computer Science",
      school: "Illinois Institute of Technology",
      duration: "2023 - 2025",
      logo: "/iitlogo.png",
      highlights: ["Entrepreneurship", "Startup Acclerator", "Graduate Assistant"]
    },
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      school: "Dayananda Sagar University",
      duration: "2017 - 2021",
      logo: "/uglogo.png",
      highlights: ["Graduated with Honors 🎖️", "Smart India Hackathon Winner", "IEEE Student Humanitarian Project Funding"]
    }
  ];

  return (
    <Container>
      <Box sx={{
        minHeight: '100vh',
        py: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }}>
        {/* Education Section */}
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
            <SchoolIcon sx={{ color: '#64ffda' }} />
            Education
          </Typography>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
            >
              <Card sx={{
                bgcolor: '#1a1a1a',
                color: '#fff',
                p: 3,
                mb: 3,
                borderRadius: 2,
                boxShadow: '0 0 20px rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 30px rgba(100,255,218,0.2)',
                  transform: 'translateY(-5px)'
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  {/* University Logo */}
                  <Box
                    component="img"
                    src={edu.logo}
                    alt={edu.school}
                    sx={{
                      width: 100,
                      height: 100,
                      objectFit: 'contain',
                      padding: '5px'
                    }}
                  />

                  {/* Degree and School Info */}
                  <Box>
                    <Typography variant="h5" sx={{ color: '#64ffda', mb: 1 }}>
                     {edu.degree}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                     {edu.school}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray' }}>
                      📅 {edu.duration}
                    </Typography>

                    {/* Highlights Badges */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {edu.highlights.map((highlight, i) => (
                        <Chip
                          key={i}
                          label={highlight}
                          variant="outlined"
                          icon={<AutoAwesomeIcon sx={{ color: '#64ffda' }} />}
                          sx={{
                            borderColor: '#64ffda',
                            color: '#64ffda',
                            '& .MuiChip-icon': { color: '#64ffda' }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </Container>
  );
};

export default Education;
