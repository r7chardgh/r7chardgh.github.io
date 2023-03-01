import React from "react";
import Grid from "@mui/material/Grid";

const App = () => {
  return (
    <>
      <Grid container spacing={0} >
        <Grid item xs={2} md={1}></Grid>
        <Grid item xs={2} md={3}>
        </Grid>
        <Grid item xs={8} md={8}>
          <div className="name"><div className="name--first">richard</div><div className="name--last">tsang</div></div>
          <div className="greet">i'm a <span className="role">frontend</span><div className="role role--sec-row">developer</div></div>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
