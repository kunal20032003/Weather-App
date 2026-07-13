import "./weatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
         city: "Lucknow",
         temp : 38.44,
    feelsLike : 39.87,
    temp_max : 38.44,
    temp_min : 38.44,
    humidity : 29,
    weather : "overcast clouds"
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="weatherApp">
          <h1>Weather App by K.P</h1>
          <SearchBox updateInfo={updateInfo}></SearchBox>
          <InfoBox info={weatherInfo} ></InfoBox>
        </div>
    )
}