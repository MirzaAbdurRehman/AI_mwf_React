
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

function SurfacesDemo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Updated App Bar with Logo, Menu, and Navigation */}
      <AppBar position="static" color="default" elevation={4} sx={{ bgcolor: 'primary.main', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
              
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" sx={{ color: 'black' }}>Home</Button>
            <Button color="inherit" sx={{ color: 'black' }}>About</Button>
            <Button color="inherit" sx={{ color: 'black' }}>Services</Button>
            <Button color="inherit" sx={{ color: 'black' }}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content inside Paper */}
      <Paper elevation={3} sx={{ p: 4, mt: 4, mx: 'auto', maxWidth: 600 }}>
        <Typography variant="h4" gutterBottom>
          Profile Overview
        </Typography>

        {/* Card for User Info */}
        <Card sx={{ mb: 4 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://cdn.pixabay.com/photo/2019/06/03/22/09/books-4250085_1280.jpg"
            alt="Profile Banner"
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Ali Khan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Web Developer | Active since 2023
            </Typography>
          </CardContent>
        </Card>

        {/* Accordion for Additional Details */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Personal Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Email: ali.khan@example.com<br />
              Phone: +92 123 4567890<br />
              Location: Karachi, Pakistan
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Skills</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - React<br />
              - JavaScript<br />
              - CSS
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Box>
  );
}

export default SurfacesDemo;
