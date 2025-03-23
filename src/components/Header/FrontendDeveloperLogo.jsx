import React from 'react';
import { Box, Typography } from '@mui/material';

const FrontendDeveloperLogo = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.frontend}>
        FRONTEND
      </Typography>
      <Typography variant="h5" sx={styles.developer}>
        DEVELOPER
      </Typography>
      <Typography sx={styles.codeBracket}>
      &lt;&gt;

     Omar Elshemy
        &lt;/&gt;
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    color: '#fff',
    textAlign: 'center',
    padding: '5px 15px',
    border: '2px solid #4CAF50',
    borderRadius: '8px',
  },
  frontend: {
    fontWeight: 'bold',
    letterSpacing: '2px',
    color: '#fff',
    lineHeight: 1,
    fontSize: '0.9rem'
  },
  developer: {
    fontWeight: 'bold',
    letterSpacing: '2px',
    color: '#4CAF50',
    marginTop: '2px',
    lineHeight: 1,
    fontSize: '1.1rem'
  },
  codeBracket: {
    fontSize: '1rem',
    marginTop: '2px',
    color: '#fff',
    lineHeight: 1
  },
};

export default FrontendDeveloperLogo; 