import React from 'react';
import {
  Avatar,
  Badge,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { AccountCircle, Email, Phone, Star } from '@mui/icons-material';

function ProfileDashboard() {
  // Sample data
  const user = {
    name: 'Ali Khan',
    email: 'ali.khan@example.com',
    phone: '+92 123 4567890',
    status: 'Active',
    role: 'Developer',
  };

  const skills = ['React', 'JavaScript', 'CSS'];
  const projects = [
    { name: 'Project A', rating: 4 },
    { name: 'Project B', rating: 3 },
    { name: 'Project C', rating: 5 },
  ];

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
      {/* Typography for heading */}
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>

      {/* Avatar with Badge */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Badge badgeContent={4} color="primary">
          <Avatar alt={user.name} src="https://via.placeholder.com/40" />
        </Badge>
        <Typography variant="h6" sx={{ ml: 2 }}>
          {user.name}
        </Typography>
      </Box>

      {/* Chip for status and role */}
      <Box sx={{ mb: 2 }}>
        <Chip label={user.status} color="success" sx={{ mr: 1 }} />
        <Chip label={user.role} color="info" />
      </Box>

      {/* Divider */}
      <Divider sx={{ my: 2 }} />

      {/* List for contact info with Icons */}
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Email />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary={user.email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Phone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone" secondary={user.phone} />
        </ListItem>
      </List>

      {/* Divider */}
      <Divider sx={{ my: 2 }} />

      {/* Chips for skills */}
      <Typography variant="subtitle1" gutterBottom>
        Skills
      </Typography>
      <Box sx={{ mb: 2 }}>
        {skills.map((skill) => (
          <Chip key={skill} label={skill} sx={{ mr: 1, mb: 1 }} />
        ))}
      </Box>

      {/* Table for projects with Tooltip */}
      <Typography variant="subtitle1" gutterBottom>
        Projects
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.name}>
              <TableCell component="th" scope="row">
                <Tooltip title={`Details about ${project.name}`}>
                  <span>{project.name}</span>
                </Tooltip>
              </TableCell>
              <TableCell align="right">
                <IconButton>
                  <Star color={project.rating >= 4 ? 'primary' : 'disabled'} />
                </IconButton>
                {project.rating}/5
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ProfileDashboard;