import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  
  const basicInfo = {
    AGE: '26',
    EMAIL: 'omarelshemy010@gmail.com',
    Whatapp: '01026238072',
    PHONE: '01204777405',
    ADDRESS: '"Fifth Settlement" , new cairo',
    LANGUAGE: 'English, Other Languages',
  };

  return (
    <Paper elevation={3} sx={{ 
      p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
      mt: 4, 
      backgroundColor: 'white', 
      mx: { xs: 2, sm: 3, md: 4 } // Responsive margins
    }}>
      <Grid container spacing={{ xs: 2, md: 4 }}> {/* Adjusted spacing for mobile */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{ 
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              mb: { xs: 2, md: 3 }
            }}
          >
            About
          </Typography>
          <Typography 
            paragraph
            sx={{ 
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: { xs: 1.6, md: 1.8 },
              textAlign: 'justify'
            }}
          >
            About Me
            Hi, I'm Omar Ibrahim Hamdy Elshemy, a passionate and detail-oriented Front-End Developer with a keen eye for clean code and elegant design. I specialize in building responsive, user-friendly, and performance-focused websites that engage users and enhance their experience.
            With expertise in HTML5, CSS3, JavaScript, and popular frameworks like React and Vue.js, I am committed to delivering high-quality solutions that are both visually appealing and functional. My work is driven by a strong foundation in UI/UX principles, ensuring that every project I work on is not only well-coded but also user-centered.
          </Typography>
          
          {showMore && (
            <Typography paragraph>
              I am a dedicated Front-End Developer with a strong passion for building elegant, intuitive, and high-performance web applications. With a solid foundation in HTML, CSS, JavaScript, and modern front-end frameworks such as React and Vue.js, I specialize in delivering responsive, accessible, and visually stunning websites that prioritize both functionality and user experience.

              With a focus on clean, modular, and maintainable code, I collaborate with design and back-end teams to create seamless, interactive user interfaces. My experience spans across a range of industries, where I have successfully implemented innovative solutions that elevate user engagement and drive business goals. Always eager to stay ahead of industry trends, I continually learn and adopt the latest technologies to ensure my work is future-proof and highly efficient.
            </Typography>
          )}
          
          <Button 
            onClick={() => setShowMore(!showMore)}
            sx={{ 
              color: '#4CAF50',
              textTransform: 'none',
              padding: { xs: '8px 0', md: 0 }, // Better touch target on mobile
              fontSize: { xs: '0.9rem', md: '1rem' },
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#45a049'
              }
            }}
          >
            {showMore ? 'Read Less' : 'Read More'}
          </Button>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{ 
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              mb: { xs: 2, md: 3 },
              mt: { xs: 3, md: 0 } // Add spacing on mobile between sections
            }}
          >
            Basic Information
          </Typography>
          {Object.entries(basicInfo).map(([key, value]) => (
            <Box 
              key={key} 
              sx={{ 
                display: 'flex', 
                mb: { xs: 1.5, md: 2 },
                flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile
                gap: { xs: 0.5, sm: 0 } // Add gap when stacked
              }}
            >
              <Typography 
                sx={{ 
                  minWidth: { sm: 120 },
                  fontWeight: 'bold',
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                {key}:
              </Typography>
              {key === 'EMAIL' || key === 'Whatapp' ? (
                <Typography 
                  component="a" 
                  href={key === 'EMAIL' ? `mailto:${value}` : `https://wa.me/2${value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: '#4CAF50',
                    textDecoration: 'none',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    wordBreak: 'break-word', // Handle long email addresses
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {value}
                </Typography>
              ) : (
                <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  {value}
                </Typography>
              )}
            </Box>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;