import React, { useState } from 'react';
import Form from '../Form/Form';

function WeatherPanel(props) {
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=39581fb308bc3c2afd417eb797c18791&lang=fa';
    let cityUrl = '&q=';
    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=39581fb308bc3c2afd417eb797c18791&lang=fa';
    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loding, setLoding] = useState(false)
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState('')

    const getLocation = async (loc) => {
        setLoding(true);
        setLocation(loc);
        // weather
        urlWeather = urlWeather + cityUrl + loc;
        await fetch(urlWeather).then(response => {
            if (!response.ok) throw { response }
            return response.json()
        }).then(weatherData => {
            setWeather(weatherData)
            console.log(weatherData);
        }).catch(error => {
            console.error();
            setLoding(false)
            setShow(false)
        })
        // Forecast
        urlForecast = urlForecast + cityUrl + loc;
        await fetch(urlForecast).then(response => {
            if (!response.ok) throw { response }
            return response.json()
        }).then(forecastData => {
            setForecast(forecastData)
            console.log(forecastData);
            setLoding(false)
            setShow(true)
        }).catch(error => {
            console.error();
            setLoding(false)
            setShow(false)
        })
    }

    return (
        <div>
             <Form
                  newLocation ={getLocation}
             />
        </div>
    );
}

export default WeatherPanel;
