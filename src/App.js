import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {getCountryList} from './Components/Api/Api';
import {countryContext} from './Components/Context/context';
function App() {

  const [countries,setCountries] = useState([]);
  const [country,setCountry] = useState("turkey");

  const onChange = (event) => {
      setCountry(event.target.value)
  }

  const getCountry = async () => {
      const data = await getCountryList();
      setCountries(data);
    } 

  return (
    <React.Fragment>
       <countryContext.Provider value={{
         country,
         countries,
         setCountry,
         setCountries,
         onChange,
         getCountry
       }}>
          <Header />
       </countryContext.Provider>
       
    </React.Fragment>
  );
}

export default App;
