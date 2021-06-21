import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";
import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
  } from '@fortawesome/free-solid-svg-icons';
  
  import '../styles/weather.scss'

  const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  color: black;
  
  `;

  const WeatherIcon = styled.div`
      display:flex;
      color:white;
      font-size:65px;
  `;

function DisplayWeather(weather) {
   
    //console.log(props);
    const Weather ={
        place:weather.results.name,
        country:weather.results.country,
        date:weather.results.day,
        icon:weather.results.icon
    }
    console.log(Weather.icon);

    let icon = null;

    if(Weather.icon ==='Clouds'){
        icon = <FontAwesomeIcon icon={faCloud}/>
    }
    else if(Weather.icon==='Clear'){
        icon = <FontAwesomeIcon icon={faSun}/>
    }
    else if(Weather.icon==='Drizzle'){
        icon = <FontAwesomeIcon icon={faCloudRain}/>
    }
    else if(Weather.icon ==='Rain'){
        icon = <FontAwesomeIcon icon={faCloudShowersHeavy}/>
    }
    else if(Weather.icon==='Snow'){
        icon = <FontAwesomeIcon icon={faSnowflake}/>
    }
    else if(Weather.icon==='Thunderstorm'){
        icon = <FontAwesomeIcon icon={faBolt}/>
    }
    else if(Weather.icon==='Mist'){
        icon = <FontAwesomeIcon icon={faSmog}/>
    }
    else{
        icon = <FontAwesomeIcon icon={faCloud}/>
    }
    
   
 
   if(weather){
       return(
           <div className="main">
           <SearchDiv>
               <h1>{Weather.place}</h1>
               <h2>{Weather.date}</h2>
               <WeatherIcon>{icon}</WeatherIcon>
        </SearchDiv>
        </div>
       )
   }
   
   
   return (
        <div>
            <h1></h1>
        </div>
    )
}

export default DisplayWeather;
