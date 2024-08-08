import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MUIspacing from './MUIspacing';
import BasicGrid from './BasicGrid';
import ComplexFluidGrid from './ComplexFluidGrid';
import AutoGrid from './AutoGrid';
import NestedGridGroup from './NestedGrid';
import MainFeaturedPost from './MainFeaturedPost';
import { FeaturedVideo } from '@mui/icons-material';
import FeaturedPost from './FeaturedPost';
import Blog from './Blog';

function App() {
  return (
    // <Grid container spacing={3}>
    // <Grid item xs={12} sm={6}>
    // <Paper>Left Side</Paper>
    // </Grid>
    // <Grid item xs={12} sm={6}>
    // <Paper>Right Side</Paper>
    // </Grid>
    // </Grid>
    // <div>
    // <Typography variant="h1" component="h2">
    // Welcome to My App
    // </Typography>
    // <Typography variant="body1">
    // This is a simple example of using Material-UI components.
    // </Typography>
    // <Button variant="contained" color="primary">
    // Hello World
    // </Button>
    // </div>
  //   <>
  //   <Grid container>
  //     Container
  //     <Grid item>
  //       <div>A flex item</div> {/* A simple flex item */}
  //     </Grid>
  //   </Grid>
  // </>
  // <MUIspacing />
  // <BasicGrid />
  // <ComplexFluidGrid />
  // <AutoGrid />
  // <NestedGridGroup />
  <Blog />
    );
}

export default App;