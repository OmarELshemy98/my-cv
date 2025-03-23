import { Box, Typography, Paper } from '@mui/material';

const Projects = () => {
  return (
    <Paper elevation={3} sx={{ 
      p: { xs: 2, sm: 3, md: 4 },
      mt: 4,
      backgroundColor: 'white',
      mx: { xs: 2, sm: 3, md: 4 }
    }}>
      <Typography 
        variant="h4" 
        align="center"
        gutterBottom 
        sx={{ 
          mb: { xs: 2, sm: 3, md: 4 },
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' },
          fontWeight: 600
        }}
      >
        My Projects
      </Typography>
      <Typography 
        paragraph
        align="center"
        sx={{ 
          fontSize: { xs: '1rem', sm: '1.25rem' },
          color: '#666',
          fontWeight: 500
        }}
      >
        Coming Soon
      </Typography>
    </Paper>
  );
};

export default Projects;