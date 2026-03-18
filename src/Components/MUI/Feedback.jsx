import React, { useState } from 'react';
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Skeleton,
  Snackbar,
  Box,
  Paper,
} from '@mui/material';

function FeedbackDemo() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);
  const handleSnackbarOpen = () => setOpenSnackbar(true);
  const handleSnackbarClose = () => setOpenSnackbar(false);
  const handleBackdropOpen = () => setOpenBackdrop(true);
  const handleBackdropClose = () => setOpenBackdrop(false);

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
      <h2>Feedback Components Demo</h2>

      {/* Alert */}
      <Alert severity="success" sx={{ mb: 2 }}>
        This is a success message!
      </Alert>
      <Alert severity="error" sx={{ mb: 2 }}>
        This is an error message!
      </Alert>

      {/* Skeleton (Loading placeholder) */}
      <Box sx={{ mb: 2 }}>
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="text" sx={{ mt: 1 }} />
        <Skeleton variant="circular" width={40} height={40} sx={{ mt: 1 }} />
      </Box>

      {/* Button to trigger Backdrop with gap */}
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" onClick={handleBackdropOpen} sx={{ mr: 2 }}>
          Show Loading
        </Button>
        <Button variant="contained" onClick={handleDialogOpen} sx={{ mr: 2 }}>
          Open Dialog
        </Button>
        <Button variant="contained" onClick={handleSnackbarOpen}>
          Show Snackbar
        </Button>
      </Box>

      <Backdrop open={openBackdrop} onClick={handleBackdropClose}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Action completed successfully!"
      />
    </Paper>
  );
}

export default FeedbackDemo;