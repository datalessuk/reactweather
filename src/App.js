import './App.css';
import axios from 'axios'
import React,{useEffect,useState} from 'react';

import Welcome from './components/Welcome'
import Search from './components/Search'
import Display from './components/DisplayWeather' 

import DisplayError from './components/ErrorDisplay'
import { render } from '@testing-library/react';
import styled from 'styled-components';




function App(props) {
  const kelvin = 273;
  const APIKEY = '9f47dbe7e74e9cca1168773c174db9a2'
  let cityKey = 'London';
  
  
  const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
  
  //Put into object 
  const [isError,setError] = useState(null);
  const [vis,setVis] = useState(null);
  
  const [state,setState] = useState({
    s:"", //Seach
    results:"",
    selected:{},
    error:false,
    weather:"",
  });


  //Setting error to false 
  //

  const search = (e)=>{
    if(e.key ==="Enter"){
      axios.get(URL+state.s + "&appid=" + APIKEY).then(res=>{
      
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        const months =[
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
        ];
        const todaysDate = new Date();
        
        const finalDate = days[todaysDate.getDay()] + " " + todaysDate.getDate() + " " + months[todaysDate.getMonth() -1];
        

        const weather ={
          name:res.data.name,
          country:res.data.sys.country,
          day:finalDate,
          icon:res.data.weather[0].main,
        }


        //console.log(weather.country);
        setError(false);
        setVis(true);
        setState(prevState =>{

          return {... prevState,results:weather}

        })

      }).catch(error=>{
        console.log(error);
        setError(true);
        setState(prevState =>{
          return{...prevState,error:true}
        });
      })
    }
  }

  const handleInput = (e) =>{
    let s = e.target.value;
  
    setState(prevState =>{
      return{...prevState,s:s}
    })
    //console.log(state.s);
  }


  //<Display results={state.results} />
  
 //
  
  return (
    
    <div className="App">
      
      <Welcome />
      <Search userInput  handleInput={handleInput} handleSearch={search}/>
      
      {!isError && vis && <Display results={state.results}/>}
      
      
      {isError && <DisplayError/> }
      
    </div>
  );
}

export default App;
