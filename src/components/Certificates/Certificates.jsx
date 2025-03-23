import { Box, Typography, Paper, Grid, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  const certificates = [
    {
      id: 1,
      image: require('./images/introduction-to-css-grid.jpg'),
      title: 'introduction-to-css-grid',
      issueDate: 'Issued 20 January, 2025',
      provider: 'udemy'
    },
    {
      id: 2,
      image: require('./images/web-design.jpg'),
      alt: 'web-design.jpg',
      title: 'Web Design',
      issueDate: 'Issued 23 January, 2025',
      provider: 'udemy'
    },
    {
      id: 3,
      image: require('./images/design-website-template-using HTML5 -CSS3.jpg'),
      title: 'design-website-template-using HTML5 -CSS3',
      issueDate: 'Issued 23 January, 2025',
      provider: 'udemy'
    },
   
    {
      id: 4,
      image: require('./images/Introduction-to-Programming-Using-JavaScript.jpg'),
      title: 'javaScript-from-scratch.jpg',
      issueDate: 'Issued 23 January, 2025',
      provider: 'udemy'
    },
    {
      id: 5,
      image: require('./images/Certified-Internet-Webmaster-JavaScript-Specialist.jpg'),
      title: 'javaScript Fundamentals',
      issueDate: 'Issued 27 January, 2025',
      provider: 'udemy'
    },
    {
      id: 6,
      image: require('./images/web-development.jpg'),
      title: 'Web Development',
      issueDate: 'Issued 30 January, 2025',
      provider: 'sololearn'
    },
    {
      id: 7,
      image: require('./images/Advanced-Windows-Store-App-Development-Using-HTML5-and-JavaScript.jpg'),
      title: 'Web Development',
      issueDate: 'Issued 30 January, 2025',
      provider: 'udemy'
    },
    {
      id: 8,
      image: require('./images/front-end-beginners.jpg'),
      title: 'Front-end for Beginners',
      issueDate: 'Issued 05 February, 2025',
      provider: 'sololearn'
    },
   
    {
      id: 9,
      image: require('./images/coding-for-data.jpg'),
      title: 'Coding for Data',
      issueDate: 'Issued 08 February, 2025',
      provider: 'sololearn'
    },
     {
      id: 10,
      image: require('./images/Practical-Next.js-React-Build-a-real-WebApp-with-Next-js.jpg'),
      alt: 'Practical-Next.js-React-Build-a-real-WebApp-with-Next-js.jpg',
      title: 'Practical Next.js & React - Build a real WebApp with Next.js',
      issueDate: 'Issued 25 February, 2025',
      provider: 'udemy'
    },
  
  ];

  return (
    <Paper elevation={3} sx={{ 
      p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
      mt: 4, 
      backgroundColor: 'white', 
      mx: { xs: 2, sm: 3, md: 4 } // Responsive margins
    }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ 
          mb: { xs: 2, sm: 3, md: 4 },
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
        }}
      >
        My Certificates
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 2, md: 3 }}>
        {certificates.map((cert) => (
          <Grid item xs={12} sm={6} md={4} key={cert.id}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 200, sm: 250, md: 300 }, // Responsive height
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: { xs: 'none', sm: 'scale(1.05)' }, // Disable hover effect on mobile
                  '& .overlay': {
                    opacity: { xs: 1, sm: 0 } // Always show overlay on mobile
                  }
                },
                '& .overlay': {
                  opacity: { xs: 1, sm: 0 } // Always show overlay on mobile
                }
              }}
              onClick={() => handleOpen(cert.image)}
            >
              <Box
                component="img"
                src={cert.image}
                alt={cert.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  backgroundColor: 'white'
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: 'rgba(0,0,0,0.8)', // Darker background for better readability
                  color: 'white',
                  p: { xs: 1.5, sm: 2 }, // Responsive padding
                  transition: 'opacity 0.3s ease-in-out'
                }}
              >
                <Typography 
                  variant="h6" 
                  align="center" 
                  gutterBottom
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                    mb: { xs: 0.5, sm: 1 }
                  }}
                >
                  {cert.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  align="center"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    mb: { xs: 0.25, sm: 0.5 }
                  }}
                >
                  {cert.issueDate}
                </Typography>
                <Typography 
                  variant="body2" 
                  align="center"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  {cert.provider}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={!!selectedImage}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 1, sm: 2 } // Add padding for mobile
        }}
      >
        <Box sx={{ 
          position: 'relative',
          width: { xs: '95%', sm: 'auto' }, // Full width on mobile
          maxWidth: '100vw'
        }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: { xs: 4, sm: 8 },
              top: { xs: 4, sm: 8 },
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.7)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.9)',
              },
              zIndex: 1,
              padding: { xs: 0.5, sm: 1 } // Smaller button on mobile
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
          </IconButton>
          <Box
            component="img"
            src={selectedImage}
            alt="Certificate"
            sx={{
              width: '100%',
              maxWidth: '100vw',
              maxHeight: { xs: '80vh', sm: '90vh' },
              objectFit: 'contain',
              bgcolor: 'white',
              p: { xs: 0.5, sm: 1 },
              borderRadius: 1,
            }}
          />
        </Box>
      </Modal>
    </Paper>
  );
};

export default Certificates;