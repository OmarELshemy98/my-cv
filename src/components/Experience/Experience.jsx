import { Box, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineContent, TimelineSeparator, TimelineDot, TimelineConnector } from '@mui/lab';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Led frontend development team and implemented modern web solutions.',
    },
    {
      title: 'Web Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed responsive websites and web applications using React.',
    },
    {
      title: 'Junior Developer',
      company: 'Startup',
      period: '2019 - 2020',
      description: 'Started career as a junior developer working on various web projects.',
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {exp.company}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {exp.period}
              </Typography>
              <Typography>{exp.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience;