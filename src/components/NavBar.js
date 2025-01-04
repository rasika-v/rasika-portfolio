import React from 'react';
import { Link } from 'react-scroll';
import { Box, Drawer, styled, Avatar } from '@mui/material';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: '250px', // Increase from 100px to desired width
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: '250px', // Make sure to change both width values
    boxSizing: 'border-box',
    backgroundColor: '#0a192f',
    borderRight: '1px solid rgba(100,255,218,0.1)',
  },
}));

const NavItem = styled(Link)({
  padding: '20px 0',
  color: '#8892b0',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'color 0.2s ease-in-out',
  '&.active': {
    color: '#64ffda',
  },
  '&:hover': {
    color: '#64ffda',
  },
});

const Navbar = () => {
  const navItems = [
    { text: 'Home', to: 'home' },
    { text: 'About', to: 'about' },
    { text: 'Education', to: 'education' },
    { text: 'Experience', to: 'experience' },
    { text: 'Projects', to: 'projects' },
    { text: 'Contact', to: 'contact' }
  ];

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <Box sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 4
      }}>
        <Avatar
          // src="R.png"
          src="LinkedInHeadshot.jpg"
          sx={{
            width: 150,
            height: 150,
            mb: 4,
            boxShadow: '0 0 20px rgba(100,255,218,0.2)',
            objectFit: 'cover'
            // '&:hover': {
            //   boxShadow: '0 0 30px rgba(100,255,218,0.3)',
            //   transition: 'all 0.3s ease-in-out'
            // }
          }}
        />
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2
        }}>
          {navItems.map((item) => (
            <NavItem
              key={item.text}
              to={item.to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="active"
              spyThrottle={500}
            >
              {item.text}
            </NavItem>

          ))}
        </Box>
      </Box>
    </StyledDrawer>
  );
};

export default Navbar;
