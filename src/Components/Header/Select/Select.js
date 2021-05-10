import React from 'react'
import {useState,useEffect} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {getCountryList} from '../../Api/Api';
export default function SelectBox() {

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin:"50px auto",
      width:"80%",
      border:"1px solid white"
    },  
  }));
  const [countries,setCountries] = useState([]);
  const [country,setCountry] = useState("turkey");

  useEffect(() => {
    const getCountry = async () => {
      const data = await getCountryList();
      setCountries(data);
    } 
    getCountry();
   
  }, [])

  const classes = useStyles();
    return (
        <React.Fragment>
        <FormControl className={classes.formControl}>
        <Select
          native
          value={country}
         onChange={event => setCountry(event.target.value)}
        >
         
          {countries.map((country) => (
            <option key={country.Slug} value={country.Slug}>{country.Country}</option>
          ))};
         
        </Select>
      </FormControl>
        </React.Fragment>
    )
}
