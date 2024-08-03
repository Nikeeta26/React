import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function weatherApp() {
    const[WeatherInfo, setWeatherInfo] = useState({
        city:"pune",
        description :  "cold",
        feel_like :  "cold",
        humidity: 33,
        temp: "14",
        tempMax: "20",
        tempMin: "14"
    });
    let updateInfo = (newInfo) => {
   setWeatherInfo(newInfo);
    }
    return(
        <>
        <h1>Weather App</h1>
          <SearchBox updateInfo={updateInfo} />
          <InfoBox info={WeatherInfo} />
        </>
    )
}