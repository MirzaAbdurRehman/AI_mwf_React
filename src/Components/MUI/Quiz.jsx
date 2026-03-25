import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  SpeedDial,
  SpeedDialAction,
  Breadcrumbs,
  Link as MuiLink,
  CircularProgress,
  Fade,
  Grow,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';

const theme = createTheme({
  palette: { primary: { main: '#0288d1' }, secondary: { main: '#c2185b' } },
  typography: { fontFamily: 'Roboto, sans-serif' },
});

const QuizApp = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });
  const [loading, setLoading] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormData({ name: '', email: '', feedback: '' });
      alert('Feedback submitted! Thanks, bhai!');
    }, 1500);
  };

  const handleQuizAnswer = (questionIndex, answer) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answer });
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    scrollToSection('results');
  };

  const navItems = [
    { text: 'Home', icon: <HomeIcon />, section: 'home' },
    { text: 'Quiz', icon: <WorkIcon />, section: 'quiz' },
    { text: 'Results', icon: <StarIcon />, section: 'results' },
    { text: 'Contact', icon: <ContactMailIcon />, section: 'contact' },
  ];

  const quizQuestions = [
    {
      question: 'Which animal is known as man’s best friend?',
      options: ['Dog', 'Cat', 'Parrot'],
      answer: 'Dog',
      image: 'https://via.placeholder.com/300?text=Dog',
    },
    {
      question: 'What’s the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Saturn'],
      answer: 'Jupiter',
      image: 'https://via.placeholder.com/300?text=Planet',
    },
  ];

  const actions = [
    { icon: <EmailIcon />, name: 'Email', onClick: () => window.open('mailto:quiz@fun.com') },
    { icon: <WhatsAppIcon />, name: 'WhatsApp', onClick: () => window.open('https://wa.me/1234567890') },
    { icon: <ShareIcon />, name: 'Share', onClick: () => navigator.share({ url: window.location.href }) },
  ];

  const calculateScore = () => {
    return quizQuestions.reduce((score, q, index) => {
      return score + (quizAnswers[index] === q.answer ? 1 : 0);
    }, 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.paper' }}>
        {/* AppBar */}
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Quiz Mania</Typography>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton onClick={() => scrollToSection(item.section)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Box sx={{ pt: 10 }}>
          {/* Home Section */}
          <Box id="home" sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
            <Container>
              <Grow in timeout={1000}>
                <Typography variant="h3">Quiz Mania - Test Your Wits!</Typography>
              </Grow>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Bhai, ready to have some fun? Jump into our quiz!
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 3 }} onClick={() => scrollToSection('quiz')}>
                Start Now
              </Button>
            </Container>
          </Box>

          {/* Breadcrumbs */}
          <Container sx={{ py: 2 }}>
            <Breadcrumbs aria-label="breadcrumb">
              {navItems.map((item) => (
                <MuiLink
                  key={item.text}
                  underline="hover"
                  color="inherit"
                  href={`#${item.section}`}
                  onClick={() => scrollToSection(item.section)}
                >
                  {item.text}
                </MuiLink>
              ))}
            </Breadcrumbs>
          </Container>

          {/* Quiz Section */}
          <Box id="quiz" sx={{ py: 5 }}>
            <Container>
              <Typography variant="h4" gutterBottom>Let’s Quiz!</Typography>
              <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} centered>
                {quizQuestions.map((_, index) => (
                  <Tab key={index} label={`Q${index + 1}`} />
                ))}
              </Tabs>
              {quizQuestions.map((q, index) => (
                tabValue === index && (
                  <Fade in key={index}>
                    <Paper sx={{ p: 3, mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                          <CardMedia
                            component="img"
                            height="150"
                            image={q.image}
                            alt={q.question}
                            sx={{ borderRadius: 2 }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Typography variant="h6">{q.question}</Typography>
                          <FormControl sx={{ mt: 2 }}>
                            <RadioGroup
                              name={`question${index}`}
                              onChange={(e) => handleQuizAnswer(index, e.target.value)}
                              value={quizAnswers[index] || ''}
                            >
                              {q.options.map((option) => (
                                <FormControlLabel
                                  key={option}
                                  value={option}
                                  control={<Radio />}
                                  label={option}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                          {index === quizQuestions.length - 1 && (
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ mt: 2 }}
                              onClick={handleQuizSubmit}
                              disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                            >
                              Submit Quiz
                            </Button>
                          )}
                        </Grid>
                      </Grid>
                    </Paper>
                  </Fade>
                )
              ))}
            </Container>
          </Box>

          {/* Results Section */}
          <Box id="results" sx={{ py: 5, bgcolor: 'grey.100' }}>
            <Container>
              <Typography variant="h4" gutterBottom>Your Score</Typography>
              {quizSubmitted ? (
                <Grow in>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">
                        Score: {calculateScore()} / {quizQuestions.length}
                      </Typography>
                      <Typography>
                        {calculateScore() === quizQuestions.length
                          ? 'Bhai, tu toh genius hai!'
                          : 'Acha try kiya, ek baar aur khel!'}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={() => {
                          setQuizSubmitted(false);
                          setQuizAnswers({});
                          setTabValue(0);
                          scrollToSection('quiz');
                        }}
                      >
                        Retake Quiz
                      </Button>
                    </CardContent>
                  </Card>
                </Grow>
              ) : (
                <Typography>Quiz submit karo to score dekho!</Typography>
              )}
            </Container>
          </Box>

          {/* Contact Section */}
          <Box id="contact" sx={{ py: 5 }}>
            <Container>
              <Typography variant="h4" gutterBottom>Batana Kaisa Laga</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Common Questions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Q: Quiz dobara kaise khelu?
                        <br />
                        A: Results section mein “Retake Quiz” button dabao!
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <ImageList cols={2} gap={8} sx={{ mt: 3, maxHeight: 200 }}>
                    <ImageListItem>
                      <img src="https://via.placeholder.com/150?text=Quiz" alt="Quiz" />
                      <ImageListItemBar title="Quiz Fun" actionIcon={<StarIcon sx={{ color: 'yellow' }} />} />
                    </ImageListItem>
                    <ImageListItem>
                      <img src="https://via.placeholder.com/150?text=Play" alt="Play" />
                      <ImageListItemBar title="Play & Learn" actionIcon={<StarIcon sx={{ color: 'yellow' }} />} />
                    </ImageListItem>
                  </ImageList>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 3 }}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Feedback"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleFormChange}
                      multiline
                      rows={3}
                      margin="normal"
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ mt: 2 }}
                      onClick={handleFormSubmit}
                      disabled={loading}
                    >
                      {loading ? <CircularProgress size={24} /> : 'Send Feedback'}
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>

        {/* SpeedDial */}
        <SpeedDial
          ariaLabel="Share options"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          icon={<ShareIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Box>
    </ThemeProvider>
  );
};

export default QuizApp;