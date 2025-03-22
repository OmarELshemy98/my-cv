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
    <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: 'white', mx: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
        My Certificates
      </Typography>

      <Grid container spacing={3}>
        {certificates.map((cert) => (
          <Grid item xs={12} sm={6} md={4} key={cert.id}>
            <Box
              sx={{
                position: 'relative',
                height: 300,
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  '& .overlay': {
                    opacity: 1
                  }
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
                  bgcolor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  p: 2,
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              >
                <Typography variant="h6" align="center" gutterBottom>
                  {cert.title}
                </Typography>
                <Typography variant="body2" align="center">
                  {cert.issueDate}
                </Typography>
                <Typography variant="body2" align="center">
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
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={selectedImage}
            alt="Certificate"
            sx={{
              maxWidth: '90%',
              maxHeight: '90vh',
              objectFit: 'contain',
              bgcolor: 'white',
              p: 1,
              borderRadius: 1,
            }}
          />
        </Box>
      </Modal>
    </Paper>
  );
};

export default Certificates;