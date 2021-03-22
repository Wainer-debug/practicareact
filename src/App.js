import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#A8C7FF',
    color: theme.palette.text.secondary,
  },
  altura: {
    paddingTop: 50,
  },
  colorButton: {
    backgroundColor: '#A8C7FF',
  },
  buttonAC: {
    backgroundColor: '#FA2D18',
    fontSize: 21,
    color: 'white',
  },
  gridAC: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#FA2D18',
    color: theme.palette.text.secondary,
  },
  gridValor: {
    padding: theme.spacing(2),
    backgroundColor: '#326BB4',
    color: theme.palette.text.secondary,
  },
  fontSizeButton: {
    fontSize: 21,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.altura}>
        <Typography component="div" style={{ backgroundColor: '#191818', height: '90vh', }} >
          <div className={classes.root}>
            <Grid container spacing={5}>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.gridValor}>

                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="outlined-full-width"
                      //type="number"
                      style={{
                        margin: 5
                      }}
                      placeholder="123456789."
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                  </form>
                </Paper>
              </Grid>
              <Grid item xs={2}>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.gridAC}>
                  <Button className={classes.buttonAC}>
                    AC
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    CE
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    %
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    ÷ 
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    7
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    8
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    9
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    X
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    4
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    5
                </Button></Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    6
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    -
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    1
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    2
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    3
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    +
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    √
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    0
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    .
                </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button className={classes.fontSizeButton}>
                    =
                </Button>
                </Paper>
              </Grid>

              <Grid item xs={2}>
              </Grid>
            </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
