import { Box, Container } from '@mui/material';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;