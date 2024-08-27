import axios from 'axios'
import './App.css'
import Header from './Header'
import SearchWeather from './SearchWeather'
import { useState } from 'react'
import AddWeather from './AddWeather'

function App() {  
  const [weatherTitle,setWeatherTitle] = useState([])
  const addW = async(title) => {
    const response = await axios.get('http://api.weatherstack.com/current?access_key=464dd63df635fbc7cd27fc7dd412b352', {
      params: {
        query:title
      }
    })
    setWeatherTitle([
      response
    ])
  }
  return (
    <>
    <Header/>
    <SearchWeather addWeather = {addW}/>
    <AddWeather weather = {weatherTitle}/>
    </>
  )
}

export default App
