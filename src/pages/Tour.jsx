import {
  Box,
  Container,
  Typography,
  Paper,
  BottomNavigation,
} from '@mui/material';
import React from 'react';
import Accordian from '../components/Arccordian';
import ImageCollage from '../components/ImageCollage';
import BasicModal from '../components/BasicModal';

export const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant='h3' component='h1' marginTop={3}>
        Explore the World las Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          src='https://api.lorem.space/image/album?w=800&h=400'
          alt=''
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant='h6' component='h4' marginTop={3}>
          Explore the World las Vegas
        </Typography>
        <Typography variant='paragraph' component='p' marginTop={3}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          dignissimos, eum nulla saepe nihil ipsum illum consequatur dolore
          laudantium repellendus est quis adipisci, quos, quibusdam aliquam
          porro ad deserunt natus. Repellendus dolore nulla beatae, delectus
          nesciunt voluptate ullam facilis commodi?
        </Typography>
      </Box>
      <Box marginTop={10}>
        <Typography variant='h6' component='h4' marginTop={3}>
          FAQ
        </Typography>
        <Accordian />
      </Box>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};
