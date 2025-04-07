import React from 'react';
import { Container, Box } from '@mui/material';
// import { styled } from '@mui/material/styles';
import AboutMeTerminal from '../components/Terminal'
// import OutlinedTimeline from '../components/AboutTimeline'
// import CustomizedTimeline from '../components/Timeline';

// const WIPContainer = styled(Box)({
//   textAlign: 'center',
//   // padding: '3rem',
//   backgroundColor: '#1a1a1a', // Darker background
//   borderRadius: '15px',
//   boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
//   margin: '2rem auto',
//   maxWidth: '800px',
//   border: '2px solid #333',
// });

const About = () => {

  return (
    <Container>
      {/* <WIPContainer> */}
        <Box sx={{
          // minHeight: '100vh',
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          // gap: 6
        }}>
          {/* <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}> */}
      
<AboutMeTerminal />


        </Box>
      {/* </WIPContainer> */}

      {/* <OutlinedTimeline /> */}

    </Container>
  );
};

export default About;
