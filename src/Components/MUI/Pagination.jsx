

import React, { useState } from 'react';
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
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs,
  Drawer,
  Menu,
  MenuItem,
  Pagination,
  SpeedDial,
  SpeedDialAction,
  Stepper,
  Step,
  StepLabel,
  Tabs,
  Tab,
  Link as MuiLink,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

function SurfacesDemo() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [navValue, setNavValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [speedDialOpen, setSpeedDialOpen] = useState(false);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleTabChange = (event, newValue) => setTabValue(newValue);
  const handleNavChange = (event, newValue) => setNavValue(newValue);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerOpen(open);
  };
  const handleSpeedDialOpen = () => setSpeedDialOpen(true);
  const handleSpeedDialClose = () => setSpeedDialOpen(false);

  const steps = ['Profile', 'Skills', 'Review'];

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <Typography variant="h6" sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
        Menu
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App Bar with Menu and Navigation */}
      <AppBar position="static" color="default" elevation={4} sx={{ bgcolor: '#ffffff', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
              MyWebsite
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" sx={{ color: '#1976d2' }} onClick={handleMenuOpen}>Account</Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>

      {/* Main Content inside Paper */}
      <Paper elevation={3} sx={{ p: 4, mt: 4, mx: 'auto', maxWidth: 600 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <MuiLink underline="hover" color="inherit" href="/">
            Home
          </MuiLink>
          <Typography color="text.primary">Profile</Typography>
        </Breadcrumbs>

        <Typography variant="h4" gutterBottom>
          Profile Overview
        </Typography>

        {/* Tabs */}
        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 4 }}>
          <Tab label="Basic Info" />
          <Tab label="Details" />
        </Tabs>
        {tabValue === 0 && (
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
        )}
        {tabValue === 1 && (
          <Box>
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
          </Box>
        )}

        {/* Stepper */}
        <Stepper activeStep={1} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Pagination */}
        <Pagination count={10} variant="outlined" shape="rounded" sx={{ mb: 4 }} />

        {/* Speed Dial for Actions */}
        <SpeedDial
          ariaLabel="Profile actions"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          icon={<EditIcon />}
          onClose={handleSpeedDialClose}
          onOpen={handleSpeedDialOpen}
          open={speedDialOpen}
        >
          <SpeedDialAction
            icon={<ShareIcon />}
            tooltipTitle="Share"
            onClick={handleSpeedDialClose}
          />
          <SpeedDialAction
            icon={<PrintIcon />}
            tooltipTitle="Print"
            onClick={handleSpeedDialClose}
          />
        </SpeedDial>

        {/* Bottom Navigation */}
        <BottomNavigation value={navValue} onChange={handleNavChange} sx={{ mt: 2 }}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Info" icon={<InfoIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default SurfacesDemo;
