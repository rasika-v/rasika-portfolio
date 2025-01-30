import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/NavBar';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a192f',
      paper: '#1a1a1a'
    },
    primary: {
      main: '#64ffda'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        minHeight: '100vh'
      }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1}}>
          <section id="home" style={{ minHeight: '100vh', paddingTop: '70px' }}>
            <Home />
          </section>
          <section id="about" style={{ minHeight: '100vh', paddingTop: '70px' }}>
            <About />
          </section>
          <section id="education" style={{ minHeight: '100vh', paddingTop: '70px' }}>
            <Education />
          </section>
          <section id="experience" style={{ minHeight: '100vh', paddingTop: '70px' }}>
            <Experience />
          </section>
          <section id="projects" style={{ minHeight: '100vh', paddingTop: '70px' }}>
            <Projects />
          </section>
          <section id="contact" style={{ minHeight: '100vh', paddingTop: '70px' }}>
            <Contact />
          </section>
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default App;
