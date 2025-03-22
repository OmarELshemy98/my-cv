import { Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
    
    emailjs.send(
      'YOUR_SERVICE_ID', // Get this from EmailJS dashboard
      'YOUR_TEMPLATE_ID', // Get this from EmailJS dashboard
      {
        from_name: formData.name,
        subject: formData.subject,
        reply_to: formData.email,
        message: formData.message,
        to_email: 'omarelshemy010@gmail.com'
      },
      'YOUR_PUBLIC_KEY' // Get this from EmailJS dashboard
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
    <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: 'white', mx: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
        Contact Me
      </Typography>

      <Grid container spacing={4}>
        {/* Left Side - Contact Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Feel free to contact me
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: '#f5f5f5', p: 1, borderRadius: 1 }}>
              <PersonIcon sx={{ color: '#666' }} />
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
                py: 1.5,
                width: 'fit-content',
                '&:hover': { bgcolor: '#45a049' }
              }}
            >
              Send
            </Button>
          </Box>
        </Grid>

        {/* Right Side - Contact Information */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: { xs: 4, md: 0 } }}>
            <Box>
              <Typography variant="h6" gutterBottom>
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
                  '&:hover': {
                    color: '#4CAF50',
                  }
                }}
              >
                <LocationOnIcon />
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