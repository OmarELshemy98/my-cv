import { Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY'); // Add this line before the component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace these placeholder values with your actual EmailJS credentials
    emailjs.send(
      'YOUR_SERVICE_ID',      // Add your Service ID
      'YOUR_TEMPLATE_ID',     // Add your Template ID
      {
        from_name: formData.name,
        subject: formData.subject,
        reply_to: formData.email,
        message: formData.message,
        to_email: 'omarelshemy010@gmail.com'
      },
      'YOUR_PUBLIC_KEY'       // Add your Public Key
    )
    .then((response) => {
      alert('Message sent successfully!');
      setFormData({ name: '', subject: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.');
    });
  };

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
        Contact Me
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {/* Contact Form */}
        <Grid 
          item 
          xs={12} 
          md={6}
          sx={{ 
            order: { xs: 2, md: 1 } // Second on mobile, first on desktop
          }}
        >
          <Typography variant="h6" gutterBottom>
            Feel free to contact me
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: { xs: 2, sm: 3 }
          }}>
            {/* Input fields styling remains same, just adding responsive padding */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1, 
              bgcolor: '#f5f5f5', 
              p: { xs: 1.5, sm: 2 }, 
              borderRadius: 1 
            }}>
              <PersonIcon sx={{ color: '#666', fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
              <TextField
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{ '& input': { p: 1 } }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: '#f5f5f5', p: 1, borderRadius: 1 }}>
              <SubjectIcon sx={{ color: '#666' }} />
              <TextField
                fullWidth
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{ '& input': { p: 1 } }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: '#f5f5f5', p: 1, borderRadius: 1 }}>
              <EmailIcon sx={{ color: '#666' }} />
              <TextField
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{ '& input': { p: 1 } }}
              />
            </Box>

            <TextField
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              sx={{ 
                bgcolor: '#f5f5f5',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' },
                },
                '& .MuiOutlinedInput-input': { p: 2 }
              }}
            />

            <Button 
              type="submit"
              variant="contained"
              sx={{ 
                bgcolor: '#4CAF50',
                py: { xs: 1, sm: 1.5 },
                px: { xs: 2, sm: 3 },
                width: 'fit-content',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': { bgcolor: '#45a049' },
                alignSelf: 'center' // Centers the button within the flex container
              }}
            >
              Send
            </Button>
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid 
          item 
          xs={12} 
          md={6}
          sx={{ 
            order: { xs: 1, md: 2 }, // First on mobile, second on desktop
            mb: { xs: 3, md: 0 } // Add bottom margin on mobile only
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
            <Box>
              <Typography variant="h6" gutterBottom
                sx={{ 
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  mb: { xs: 1, sm: 1.5 }
                }}
              >
                Address
              </Typography>
              <Typography 
                component="a"
                href="https://maps.app.goo.gl/tXS5P8GNkXE1wv5K7?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  color: '#666',
                  textDecoration: 'none',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  wordBreak: 'break-word',
                  '&:hover': {
                    color: '#4CAF50',
                  }
                }}
              >
                <LocationOnIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
                25,new lotus, fifth statements,New cairo , Egypt
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Phone
              </Typography>
              <Typography 
                component="a"
                href="tel:+201204777405"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  color: '#666',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#4CAF50',
                  }
                }}
              >
                <PhoneIcon />
                01204777405
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Email
              </Typography>
              <Typography 
                component="a"
                href="mailto:omarelshemy010@gmail.com"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  color: '#666',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#4CAF50',
                  }
                }}
              >
                <EmailIcon />
                omarelshemy010@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Contact;