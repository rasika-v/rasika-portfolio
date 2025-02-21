import React from 'react';
import { Container, Typography, Box, Card } from '@mui/material';
import { motion } from 'framer-motion';
// import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { FaReact, FaNode } from 'react-icons/fa';
import { SiFlutter, SiTypescript, SiJavascript, SiFirebase } from 'react-icons/si';


const Experience = () => {
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

  const experiences = [
    {
      title: "Lead Founding Software Engineer (University Startup Accelerator)",
      company: "Deleg8",
      duration: "January 2025 - Present",
      // description: "Your role description and achievements",
      // logo: "/300x0w.jpg",
      techStack: [
        { icon: <FaReact />, name: "Flutter" },
        { icon: <SiFirebase />, name: "Firebase" }
      ]
    },
    {
      title: "Software Developement Intern",
      company: "The Helpy App, Inc.",
      duration: "October 2024 - December 2024",
      // description: "Your role description and achievements",
      // logo: "/300x0w.jpg",
      techStack: [
        { icon: <SiFlutter />, name: "Flutter" },
        { icon: <SiFirebase />, name: "Firebase" }
      ]
    },
    {
      title: "Software Developement Engineer | Graduate Engineer Trainee | Software Engineer Intern",
      company: "Mercedes-Benz Research & Development India",
      duration: "January 2021 - July 2023",
      // description: "Your role description and achievements",
      // logo: "/mbrdi.jpg",
      techStack: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaNode />, name: "Node.js" },
      ]
    },
    {
        title: "Software Developer Intern",
        company: "Nokia Bell Labs",
        duration: "August 2020 - December 2020",
        // description: "Your role description and achievements",
        // logo: "/nokia.png",
        techStack: [
          { icon: <SiFlutter />, name: "Flutter" },
          { icon: <SiFirebase />, name: "Firebase" }
        ]
      },
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
        {/* Work Experience Section */}
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
              gap: 2,
              fontWeight: 500
            }}
          >
            <WorkIcon sx={{ color: '#64ffda' }} />
            Experience
          </Typography>

          {experiences.map((exp, index) => (
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
                '&:hover': {
                  boxShadow: '0 0 30px rgba(255,255,255,0.3)',
                  transform: 'scale(1.02)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {/* <Box
                      component="img"
                      // src={exp.logo}
                      alt={exp.company}
                      sx={{
                        width: { xs: '50px', md: '60px' },
                        height: { xs: '50px', md: '60px' },
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                    /> */}
                    <Box>
                      <Typography variant="h5" sx={{
                        color: '#64ffda',
                        mb: 1,
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                        fontWeight: 500
                      }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{
                        fontSize: { xs: '0.9rem', md: '1rem' }
                      }}>
                        {exp.company} | {exp.duration}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end'
                  }}>
                    {exp.techStack?.map((tech, index) => (
                      <Box
                        key={index}
                        sx={{
                          fontSize: '1.5rem',
                          color: '#64ffda',
                          opacity: 0.8,
                          '&:hover': {
                            opacity: 1,
                            transform: 'translateY(-2px)',
                            transition: 'all 0.2s ease-in-out'
                          }
                        }}
                      >
                        {tech.icon}
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Typography variant="body1" sx={{
                  mt: 2,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  lineHeight: 1.5
                }}>
                  {exp.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </Box>
    </Container>
  );
};

export default Experience;
