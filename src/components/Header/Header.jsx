import { AppBar, Toolbar, Button, Box, Typography, Container, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'ABOUT', path: '/' },
    { label: 'SKILLS', path: '/skills' },
    { label: 'PORTFOLIO', path: '/portfolio' },
    { label: 'EXPERIENCE', path: '/experience' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const socialIcons = [
    { icon: <FacebookIcon />, link: '#' },
    { icon: <TwitterIcon />, link: '#' },
    { icon: <GoogleIcon />, link: '#' },
    { icon: <InstagramIcon />, link: '#' },
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(33, 47, 41, 0.9)',
          boxShadow: 'none',
          padding: '10px 0'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ padding: '0 !important' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                flexGrow: 1, 
                color: '#9CC5B7',
                fontWeight: 500,
                letterSpacing: '1px'
              }}
            >
              Welcome to my Website
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: '#9CC5B7',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '1px',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#ffffff',
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
          backgroundImage: 'url("/bridge.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }
        }}
      >
        <Box sx={{ position: 'relative', textAlign: 'center', color: 'white' }}>
          <Avatar
            src="./profile-photo.jpeg"
            sx={{
              width: 150,
              height: 150,
              margin: '0 auto 20px',
              border: '3px solid white'
            }}
          />
          <Typography variant="h2" sx={{ mb: 1, fontWeight: 500 }}>
            Omar Elshemy
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, letterSpacing: 1 }}>
            Front-End Developer
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#4CAF50',
                '&:hover': { bgcolor: '#45a049' }
              }}
            >
              Hire Me
            </Button>
            <Button 
              variant="contained"
              sx={{ 
                bgcolor: '#4CAF50',
                '&:hover': { bgcolor: '#45a049' }
              }}
            >
              Download CV
            </Button>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            {socialIcons.map((social, index) => (
              <Box
                key={index}
                component="a"
                href={social.link}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.3)',
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