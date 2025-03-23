import { Box, Typography, Paper, LinearProgress } from '@mui/material';

const Skills = () => {
  const skills = [
    { name: 'HTML', value: 80 },
    { name: 'CSS', value: 75 },
    { name: 'JAVASCRIPT', value: 70 },
    { name: 'REACT', value: 75 },
    { name: 'BOOTSTRAP', value: 75 },
    { name: 'NEXT.JS', value: 70 },
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
        Professional Skills
      </Typography>
      
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { 
          xs: '1fr',           // Single column on mobile
          sm: 'repeat(2, 1fr)' // Two columns on tablet and up
        },
        gap: { xs: 2, sm: 3, md: 4 }
      }}>
        {skills.map((skill) => (
          <Box key={skill.name} sx={{ mb: { xs: 1.5, sm: 2 } }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              mb: { xs: 0.5, sm: 1 },
              alignItems: 'center'
            }}>
              <Typography sx={{ 
                color: '#4CAF50', 
                fontWeight: 500,
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}>
                {skill.name}
              </Typography>
              <Typography sx={{ 
                color: '#4CAF50', 
                fontWeight: 500,
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}>
                {skill.value}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={skill.value}
              sx={{
                height: { xs: 6, sm: 8 }, // Thinner on mobile
                borderRadius: { xs: 3, sm: 4 },
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#4CAF50',
                  borderRadius: { xs: 3, sm: 4 },
                }
              }}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default Skills;