import React from 'react'
import logo from '../../Assets/coronavirus.svg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
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
                   <ChartBox />
                </Grid>
            </Grid>
      </Container>
    </React.Fragment>
    )
}
