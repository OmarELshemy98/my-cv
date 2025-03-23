import { BrowserRouter as Router } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/contact'
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
      <SpeedInsights /> {/* Add SpeedInsights here */}
    </Router>
  );
}

export default App;
