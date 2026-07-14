import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useTransition } from 'react';
import "./SearchBox.css";
import InfoBox from './InfoBox';
export default function SearchBox({updateInfo}){
    let [error,setError] = useState("");
    let [city,setCity] = useState("");

    let URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "7e2f0dcec0c3ba03ba068ec133db8679";

    let getWeatherInfo = async() =>{
   try{
    let response =  await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
   let jsonRes = await response.json();
  //  console.log(jsonRes);
   let result = {
    city: city,
    temp : jsonRes.main.temp,
    feelsLike : jsonRes.main.feels_like,
    temp_max : jsonRes.main.temp_max,
    temp_min : jsonRes.main.temp_min,
    humidity : jsonRes.main.humidity,
    weather : jsonRes.weather[0].description,
   }

   console.log(result);
   return result;
   } catch(err){
    throw err;
   }

    }
    
    let handleChange = (evet) =>{
      setCity(evet.target.value);
    }

    let handleSubmit = async(evet) =>{
    try{
        evet.preventDefault();
      console.log(city);
      setCity("");
      setError("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch(err){
       setError("No such place exists in my api");
    }
    }

    return(
        <div className='search'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="Location" variant="outlined" required value={city} onChange={handleChange} /><br></br><br></br>
            <Button variant="contained" type='submit'>Get Weather</Button>
            </form>
             <p style={{ color: 'red', fontSize: '1.5rem' }}>{error}</p>
        </div>
    )
}