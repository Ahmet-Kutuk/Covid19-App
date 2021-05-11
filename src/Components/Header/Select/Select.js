import React from 'react'
import {useEffect,useContext} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {countryContext} from '../../Context/context';
export default function SelectBox() {
  const {getCountry} = useContext(countryContext)
  const {country} = useContext(countryContext)
  const {countries} = useContext(countryContext)
  const {onChange} = useContext(countryContext)


  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin:"50px auto",
      width:"90%",
      border:"none",
      color:'white',
    },  
  }));
 

  useEffect(() => {
   
    getCountry();
   
  })

  const classes = useStyles();
    return (
        <React.Fragment>
        <FormControl className={classes.formControl}>
        <Select
          native
          value={country}
         onChange={onChange}
        >
         
          {countries.map((country) => (
            <option  key={country.Slug} value={country.Slug}>{country.Country}</option>
          ))};
         
        </Select>
      </FormControl>
        </React.Fragment>
    )
}
