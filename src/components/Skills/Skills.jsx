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
    <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: 'white', mx: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
        Professional Skills
      </Typography>
      
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4 }}>
        {skills.map((skill) => (
          <Box key={skill.name} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography sx={{ color: '#4CAF50', fontWeight: 500 }}>
                {skill.name}
              </Typography>
              <Typography sx={{ color: '#4CAF50', fontWeight: 500 }}>
                {skill.value}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={skill.value}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#4CAF50',
                  borderRadius: 4,
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