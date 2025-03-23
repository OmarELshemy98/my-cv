import { AppBar, Toolbar, Button, Box, Typography, Container, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FrontendDeveloperLogo from './FrontendDeveloperLogo';
import { useState, useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64; // Height of your fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = menuItems.map(item => item.sectionId);
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const menuItems = [
    { label: 'About', sectionId: 'about' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Portfolio', sectionId: 'portfolio' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Certificates', sectionId: 'certificates' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const socialIcons = [
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/omar-elshemy-b7b4b0293/' },
    { icon: <GitHubIcon />, link: 'https://github.com/OmarELshemy98' },
    { icon: <EmailIcon />, link: 'mailto:omarelshemy010@gmail.com' },
    { icon: <WhatsAppIcon />, link: 'https://wa.me/201026238072' },
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: '#1a1a1a',
          boxShadow: 'none',
          padding: 0
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            px: '0 !important',
            mx: 0,
            maxWidth: '100% !important'
          }}
        >
          <Toolbar 
            disableGutters
            sx={{ 
              padding: '0 !important', 
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
              gap: 2,
              minHeight: '64px !important'
            }}
          >
            {/* Left section - Welcome text */}
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#ffffff',
                fontWeight: 500,
                letterSpacing: '1px',
                pl: 1
              }}
            >
              Welcome to my Website
            </Typography>

            {/* Center section - Logo */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              position: 'relative',
              width: 'fit-content'
            }}>
              <FrontendDeveloperLogo />
            </Box>

            {/* Right section - Navigation */}
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              justifyContent: 'flex-end',
              pr: 1
            }}>
              {menuItems.map((item) => (
                <Button
                  key={item.sectionId}
                  onClick={() => handleScroll(item.sectionId)}
                  sx={{
                    color: activeSection === item.sectionId ? '#4CAF50' : '#ffffff',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '1px',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#4CAF50',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: activeSection === item.sectionId ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                      transformOrigin: 'center',
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#4CAF50',
                      transition: 'transform 0.3s ease'
                    },
                    textTransform: 'uppercase'
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${require('./images/background5.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'cover',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', maxWidth: '800px', mx: 'auto', px: 3 }}>
          <Avatar
            src={require('./images/profile-photo.jpg')}
            sx={{
              width: 180,
              height: 180,
              margin: '0 auto 30px',
              border: '5px solid #4CAF50'
            }}
          />
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 600, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Omar Elshemy
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4, 
              letterSpacing: 2,
              color: '#4CAF50',
              textTransform: 'uppercase',
              fontWeight: 500
            }}
          >
            Front-End Developer
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb: 5 }}>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#4CAF50',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': { 
                  bgcolor: '#45a049',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s'
                }
              }}
            >
              Hire Me
            </Button>
           
          </Box>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
            {socialIcons.map((social, index) => (
              <Box
                key={index}
                component="a"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: '50%',
                  bgcolor: '#4CAF50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: '#45a049',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                {social.icon}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;