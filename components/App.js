import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const App = () => {
  return (
    <>
      <Container>
        <Grid container spacing={0} padding={0}>
          <Grid item xs={2} md={1}></Grid>
          <Grid item xs={2} md={3}><div style={{background:'black'}}></div>
          </Grid>
          <Grid item xs={8} md={8}>
            <div style={{height:'3260px'}}></div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
