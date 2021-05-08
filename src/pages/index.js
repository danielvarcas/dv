import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import * as React from "react";

export default function IndexPage() {
  return (
    <>
      <CssBaseline />
      <main>
        <title>Home Page</title>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">DV</Typography>
          </Toolbar>
        </AppBar>

        <Container>
          <Typography variant="h1">Hello, world.</Typography>
        </Container>
      </main>
    </>
  );
}
