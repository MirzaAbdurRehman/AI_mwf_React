

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function LayoutDemo() {
  // Sample product data
  const products = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1675860538255-0fe6b5e73c4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Product 1',
      author: 'Author A',
      rating: 4,
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Product 2',
      author: 'Author B',
      rating: 5,
    },
    {
      img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Product 3',
      author: 'Author C',
      rating: 3,
    },
    {
      img: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Product 4',
      author: 'Author D',
      rating: 4,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Container for centered content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom align="center">
          Product Showcase
        </Typography>

        {/* Stack for header section */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Button variant="contained" color="primary">
            View All
          </Button>
          <Button variant="outlined" color="primary">
            Add Product
          </Button>
        </Stack>

        {/* Grid for layout */}
        <Grid container spacing={4}>
          {/* Main content area */}
          <Grid item xs={12} md={9}>
            <ImageList sx={{ width: '100%', height: 'auto' }} cols={2} rowHeight={300} gap={16}>
              {products.map((product) => (
                <ImageListItem key={product.img}>
                  <img
                    src={product.img}
                    alt={product.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={product.title}
                    subtitle={<span>by: {product.author}</span>}
                    actionIcon={
                      <StarIcon sx={{ color: 'yellow' }} />
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>

          {/* Sidebar area */}
          <Grid  item xs={12} md={3}>
            <Card align="center" sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Featured Product
                </Typography>
                <Typography variant="body2">
                  Check out our top-rated product of the month!
                </Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }} fullWidth>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LayoutDemo;