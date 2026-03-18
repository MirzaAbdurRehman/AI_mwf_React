import React, { useState } from 'react';
import {
  Autocomplete,
  Button,
  ButtonGroup,
  Checkbox,
  Fab,
  Radio,
  RadioGroup,
  Rating,
  Select,
  MenuItem,
  Slider,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';

function AllComponentsDemo() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState(null);
  const [gender, setGender] = useState('');
  const [rating, setRating] = useState(2);
  const [age, setAge] = useState(25);
  const [darkMode, setDarkMode] = useState(false);
  const [agree, setAgree] = useState(false);
  const [alignment, setAlignment] = useState('left');

  const countries = [
    { code: 'US', label: 'USA' },
    { code: 'PK', label: 'Pakistan' },
    { code: 'IN', label: 'India' },
  ];

  const handleSubmit = () => {
    alert(`Name: ${name}, Country: ${country?.label}, Gender: ${gender}, Rating: ${rating}, Age: ${age}, Dark Mode: ${darkMode}, Agree: ${agree}, Alignment: ${alignment}`);
  };

  return (
    <Paper elevation={6} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
      <h2>Component Practice Form</h2>

      {/* Text Field */}
      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Autocomplete */}
      <Autocomplete
        options={countries}
        getOptionLabel={(option) => option.label}
        value={country}
        onChange={(event, newValue) => setCountry(newValue)}
        renderInput={(params) => <TextField {...params} label="Select Country" />}
        sx={{ mb: 2 }}
      />

      {/* Select */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <FormLabel>Gender</FormLabel>
        <Select value={gender} onChange={(e) => setGender(e.target.value)}>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>

      {/* Radio Group */}
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel>Subscription</FormLabel>
        <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
          <FormControlLabel value="free" control={<Radio />} label="Free" />
          <FormControlLabel value="paid" control={<Radio />} label="Paid" />
        </RadioGroup>
      </FormControl>

      {/* Rating */}
      <Rating
        value={rating}
        onChange={(e, newValue) => setRating(newValue)}
        sx={{ mb: 2 }}
      />

      {/* Slider */}
      <Slider
        value={age}
        onChange={(e, newValue) => setAge(newValue)}
        min={18}
        max={60}
        sx={{ mb: 2 }}
      />

      {/* Switch */}
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />}
        label="Dark Mode"
        sx={{ mb: 2 }}
      />

      {/* Checkbox */}
      <FormControlLabel
        control={<Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />}
        label="I Agree"
        sx={{ mb: 2 }}
      />

      {/* Toggle Button */}
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={(e, newAlignment) => setAlignment(newAlignment)}
        sx={{ mb: 2 }}
      >
        <ToggleButton value="left">Left</ToggleButton>
        <ToggleButton value="center">Center</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
      </ToggleButtonGroup>

      

      {/* Button Group */}
      <ButtonGroup variant="outlined" sx={{ mb: 2 }}>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>

      {/* Button */}
      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mb: 2 }}>
        Submit
      </Button>

      {/* Floating Action Button */}
      <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <AddIcon />
      </Fab>
    </Paper>
  );
}

export default AllComponentsDemo;

