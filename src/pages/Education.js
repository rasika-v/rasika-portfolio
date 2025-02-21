import React from 'react';
import { Container, Typography, Box, Card } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CustomizedTimelineUG from '../components/UndergradTimeline';
// import WorkIcon from '@mui/icons-material/Work';
// import { FaReact, FaNode, FaPython } from 'react-icons/fa';
// import { SiFlutter, SiTypescript, SiJavascript, SiFirebase, SiTrello } from 'react-icons/si';


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
      // description: "Relevant coursework and achievements",
      logo: "/iitlogo.png"

    },
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      school: "Dayananda Sagar University",
      duration: "2017 - 2021",
      // description: "Relevant coursework and achievements",
      logo: "/uglogo.png"
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
                // '&:hover': {
                //   boxShadow: '0 0 30px rgba(100,255,218,0.2)',
                //   transform: 'translateY(-5px)',
                //   transition: 'all 0.3s ease-in-out'
                // }
              }}>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  {/* <Box
                    component="img"
                    src={edu.logo}
                    alt={edu.school}
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)'
                    }}
                  /> */}
                  <Box
                    component="img"
                    src={edu.logo} // or exp.logo for experience section
                    alt={edu.school} // or exp.company for experience section
                    sx={{
                      width: '100px', // Set fixed width
                      height: '100px', // Set fixed height
                      objectFit: 'contain', // Maintains aspect ratio
                      // filter: 'brightness(0) invert(1)',
                      padding: '5px' // Add padding to prevent logos from touching borders
                    }}
                  />
                  <Box>
                    <Typography variant="h5" sx={{ color: '#64ffda', mb: 1 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="subtitle1">
                      {edu.school} | {edu.duration}
                    </Typography>
                    
                  </Box>
                  <CustomizedTimelineUG />
                </Box>
                <Typography variant="body1">
                  {edu.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </Container>
  );
};

export default Education;
