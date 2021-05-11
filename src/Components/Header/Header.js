import React from 'react'
import logo from '../../Assets/coronavirus.svg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
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
                <Grid item xs={12}>
                    <p style={{marginLeft:"150px",fontSize:"1.2rem",marginTop:"170px",color:"white"}}>You can check the repository in my github account to examine the source code of the application. <a target="blank" href="https://github.com/Ahmet-Kutuk/Covid19-App">Source Code</a></p>
                </Grid>
            </Grid>
      </Container>
    </React.Fragment>
    )
}
