import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AppBar,
  Card,
  CardContent,
  Grid,
  Link,
  TextField,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import "./style.css";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Search prototype</Typography>
        </Toolbar>
      </AppBar>
      <Box mt={1}>
        <Grid
          alignItems="center"
          container
          direction="column"
          justify="center"
          spacing={3}
        >
          <Grid item md={6} sm={9} xs={12}>
            <TextField label="Search" />
          </Grid>
          <Grid item md={6} sm={9} xs={12}>
            <Typography>Results count: 1 | Average risk: 97</Typography>
          </Grid>
          <Grid item md={6} sm={9} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  2020-06-26
                </Typography>
                <Typography variant="h5" component="h2">
                  Expedita mollitia dolores
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  <Link
                    href="http://sigmund.com"
                    rel="noopener"
                    target="_blank"
                  >
                    http://sigmund.com
                  </Link>
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                  Sit officia temporibus officiis dolores aliquam sint.
                  Voluptatem id magni quod atque qui voluptates aspernatur. Aut
                  repellendus vel. Vitae nam voluptatum dolore molestiae ut.
                  Reprehenderit non eos quibusdam excepturi et voluptas dolor
                  eaque.
                </Typography>
                <Typography align="right" color="textSecondary" variant="body2">
                  Risk score: 97
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
