import { BrowserRouter as Router } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Projects from './components/Projects/projects';  // Match case with actual file
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/contact';  // Match case with actual file
import Experience from './components/Experience/Experience';
import Certificates from './components/Certificates/Certificates';
import Box from '@mui/material/Box';

function App() {
  return (
    <Router>
      <Layout>
        <Box sx={{ scrollBehavior: 'smooth' }}>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="portfolio">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="certificates">
            <Certificates />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Box>
      </Layout>
      <SpeedInsights />
    </Router>
  );
}

export default App;
