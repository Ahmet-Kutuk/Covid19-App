import React from 'react'
import logo from '../../Assets/coronavirus.svg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from './Select/Select';
import ChartBox from '../Chart/Chart';
export default function Header() {


    return (
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
            <Grid container >
                <Grid item xs={4}>
                <img src={logo} alt="Covid Logo"  height={100} width={100} style={{marginTop:"20px"}}/>
                </Grid>
                <Grid item xs={8}>
                   <Select />
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                   <ChartBox />
                    </Paper>
                </Grid>
                <Grid style={{textAlign:"center",marginTop:"3rem"}} item xs={12}>
                    <Typography variant="h6">
                    You can check the repository in my github account to examine the source code of the application.<a href="#">Source Code</a>
                    </Typography>
                </Grid>
            </Grid>
      </Container>
    </React.Fragment>
    )
}
