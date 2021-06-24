import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";
import Fade from '../components/FadeIn'
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

  const Main = styled.div`
        flex-basis: 100%;
        display: flex;
        flex-wrap: wrap;
        background-color: rgba(255, 255, 255, 0.342);
        align-items: center;
        max-width: 350px;
        margin: 0 auto;
        justify-content: center;
        padding: 10px 0;
        font-weight: lighter;
        align-self: flex-start;
        font-family: 'Montserrat', sans-serif;
        border-radius: 20px;
        margin-top: 40px;
        font-weight: lighter;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        visibility: hidden;
        position: relative;
        top:20px;
        animation: ${Fade} 0.8s 1.4s forwards;
  `;

  const SearchDiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 30px;
        color: white;
        text-align:right;
        text-transform:capitalize;
        animation: ${Fade} 0.5s 1.4s forwards;
    `;

  const WeatherIcon = styled.div`
        display:flex;
        color:white;
        font-size:65px;
    `;

  const Temp = styled.div`
    color:white;
    font-size:3rem;
  `;

function DisplayWeather(weather) {
   

    const Weather ={
        place:weather.results.name,
        country:weather.results.country,
        date:weather.results.day,
        icon:weather.results.icon,
        temp:weather.results.temp,
        description:weather.results.description
    }

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
           <Main>
           <SearchDiv>
               <h1>{Weather.place},{Weather.country}</h1>
               <h2>{Weather.date}</h2>
               <br />
               
               <WeatherIcon>{icon}&nbsp;<Temp>{Weather.temp}°</Temp></WeatherIcon>
               <br />
               <h2>{Weather.description}</h2>
        </SearchDiv>
        </Main>
        
       )
   }
   
   
   return (
        <div>
            <h1></h1>
        </div>
    )
}

export default DisplayWeather;
