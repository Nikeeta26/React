import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import Alert from '@mui/material/Alert';

export default function SearchBox({updateInfo}){

  let [city, setCity] = useState("");
  let[error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "20250862820fc001bf19cc4757b41ba0"

  let getWeatherInfo = async ()  => {
    try{
    let data = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let res = await data.json();
    console.log(res);
    let result = {
      city:res.name,
       temp : res.main.temp,
       tempMin : res.main.temp_min,
       tempMax : res.main.temp_max,
       humidity : res.main.humidity,
       feel_like : res.main.feels_like,
       description : res.weather[0].description,
    }
    console.log(result);
    return result;
  } catch(error){
    throw error;
  }
  };

  const handleInpute = (evn)=>{
    setCity(evn.target.value);
    console.log("data send",evn.target.value);
  }

  let handleSubmit = async (evn) => {
    try{ 
     evn.preventDefault();
     console.log(city);
     setCity("");
     let newInfo = await getWeatherInfo();
     updateInfo(newInfo);
    } catch(error){
      setError(true);
    }
  }

  
    return(
        <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={city} required onChange={handleInpute}/>
        <br></br><br></br>
        <Button variant="contained" type="submit" >
        Search
      </Button>
       {error && <p style={{color:"red"}}>No such place exists!</p>} 
      </form>
        </div>
        
    )
}