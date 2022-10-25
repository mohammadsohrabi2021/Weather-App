import React from 'react';

function CardList({showData,weather,forecast,iconUrl}) {
    let url = '';
   

    let iconUrl3 = '';
    let iconUrl6 = '';
    let iconUrl9 = '';
    let iconUrl12 = '';
    if (showData) {
        url  = 'http://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png';

        iconUrl3 = url + forecast.list[1].weather[0].icon + '.png';
        iconUrl6 = url + forecast.list[2].weather[0].icon + '.png';
        iconUrl9 = url + forecast.list[3].weather[0].icon + '.png';
        iconUrl12 = url + forecast.list[4].weather[0].icon + '.png';
    }
    return (
        <div className='row mt-4'>
        <div className='col'>
            <p>روز چهارم</p>
            <p className='description'><img src={iconUrl3} alt="icon" />{forecast.list[1].weather[0].description}</p>
            <p className='temp'>{(forecast.list[1].main.temp -273.15).toFixed(1)} °C</p>
        </div>
        <div className='col'>
            <p>روز سوم</p>
            <p className='description'><img src={iconUrl6} alt="icon" />{forecast.list[2].weather[0].description}</p>
            <p className='temp'>{(forecast.list[2].main.temp -273.15).toFixed(1)} °C</p>
        </div>
        <div className='col'>
            <p>روز دوم</p>
            <p className='description'><img src={iconUrl9} alt="icon" />{forecast.list[3].weather[0].description}</p>
            <p className='temp'>{(forecast.list[3].main.temp -273.15).toFixed(1)} °C</p>
        </div>
        <div className='col'>
            <p>روز اول</p>
            <p className='description'><img src={iconUrl12} alt="icon" />{forecast.list[4].weather[0].description}</p>
            <p className='temp'>{(forecast.list[4].main.temp -273.15).toFixed(1)} °C</p>
        </div>
    </div>
    );
}

export default CardList;