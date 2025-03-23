import { Box, Typography, Paper, Grid } from '@mui/material';

const Experience = () => {
  const experiences = [
    {
      title: 'Front End Developer',
      company: 'SIMINDS',
      period: 'SEPTEMBER 2024 - PRESENT',
      description: `1-• Built responsive websites using HTML, CSS, and JavaScript to improve user experience.
      2-• Collaborated with team members to implement new features, boosting site performance.
      3-• Assisted in bug fixes and site updates to ensure optimal functionality`
    },
    {
      title: 'SALES EXECUTIVE',
      company: 'CHUBB LIFE INSURANCE',
      period: 'MAY 2024 - SEPTEMBER 2025',
      description: `1-• Assist clients with selecting life insurance policies tailored to their needs.
      2-•Provide expert advice on loan products, guiding clients through the application process.
      3-•Conduct financial assessments and recommend suitable financial products.
      4-•Collaborate with bank staff to ensure smooth operations and excellent customer service.
      5-•Maintain detailed records of client interactions and financial transactions.`
    },
    {
      title: 'CORPORATE ACCOUNTANT ',
      company: 'MABARET AL ASAFRA HOSPITAL',
      period: 'APRIL 2013 - FEBRUARY 2014',
      description: `1-•Prepared monthly financial reports, highlighting key metrics and trends for management review.
      2-•Supported accounts payable and receivable functions, including invoice processing and payment collections.
      3-•Maintained accurate records of financial transactions, ensuring data integrity and compliance with
accounting standards..
      4-•Reconciled bank statements and general ledger accounts, resolving discrepancies promptly.
      5-•Assisted in preparing tax returns and regulatory filings, ensuring compliance with local and
federal regulations.`    },
  ];

  return (
    <Paper elevation={3} sx={{ 
      p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
      mt: 4, 
      backgroundColor: 'white', 
      mx: { xs: 2, sm: 3, md: 4 } // Responsive margin
    }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ 
          mb: { xs: 2, md: 4 },
          fontSize: { xs: '1.8rem', sm: '2.125rem' } // Responsive font size
        }}
      >
        Work Experience
      </Typography>
      
      <Box sx={{ mt: { xs: 2, md: 4 } }}>
        {experiences.map((exp, index) => (
          <Grid container key={index} spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 2, md: 3 } }}>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  bgcolor: '#4CAF50',
                  color: 'white',
                  p: { xs: 2, md: 3 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'column' }, // Horizontal on mobile
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: { xs: 'left', md: 'center' },
                  borderRadius: '4px'
                }}
              >
                <Typography 
                  sx={{ 
                    fontWeight: 500,
                    mb: { xs: 0, md: 1 },
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  {exp.period}
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}
                >
                  {exp.company}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box sx={{ 
                p: { xs: 1.5, md: 2 },
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                borderRadius: '4px'
              }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: { xs: 1, md: 2 }, 
                    color: '#333',
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                  {exp.title}
                </Typography>
                <Typography sx={{ 
                  color: '#666', 
                  lineHeight: 1.7, 
                  whiteSpace: 'pre-line',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}>
                  {exp.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Paper>
  );
};

export default Experience;