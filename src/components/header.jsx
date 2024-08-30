import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import SecureFinLogo from '../assets/SecureFin.png'; // Import the image

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Image for larger screens */}
          <img
            src={SecureFinLogo}
            alt="SecureFin Logo"
            style={{
              display: { xs: 'none', md: 'flex' },
              width: '50px',
              height: 'auto',
              marginRight: '8px',
            }}
            className="logo-md"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SecureFin
          </Typography>
          
          {/* Image for smaller screens */}
          <img
            src={SecureFinLogo}
            alt="SecureFin Logo"
            style={{
              display: { xs: 'flex', md: 'none' },
              width: '40px',
              height: 'auto',
              marginRight: '8px',
            }}
            className="logo-xs"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SecureFin
          </Typography>
        </Box>
        <Button color="inherit" component={Link} to="/signup">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
