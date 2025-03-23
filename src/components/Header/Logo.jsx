import React from 'react';
import { Box, Typography } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';

const Logo = () => {
  return (
    <Box sx={styles.container}>
      <WebIcon sx={styles.icon} />
      <Box sx={styles.textContainer}>
        <Typography variant="h6" sx={styles.name}>
          Omar Elshemy
        </Typography>
        <Typography variant="body2" sx={styles.role}>
          Front-end Developer
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: 2,
    fontSize: '40px',
    color: '#ffffff', // Changed to white to match header theme
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontWeight: 'bold',
    color: '#ffffff', // Changed to white to match header theme
  },
  role: {
    color: '#4CAF50', // Changed to match your theme color
  },
};

export default Logo; 