import React from 'react';
import Spinner from '../Spinner/Spinner';
import image from '../../assets/image/sunset.jpg'
import './Card.css'
import CardList from './CardList';
function Card({ loadingData, showData, weather, forecast }) {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    let iconUrl = '';

    if (loadingData) {
        return <Spinner />;
    }

    return (

        <div className='mt-5'>
            {showData === true ? (
                <div className='container'>
                    <div className='card mb-3 mx-auto bg-dark text-light'>
                        <div className='row g-0'>
                            <div className='col-md-5'>
                                <h3 className='card-title'>{weather.name}</h3>
                                <p className='card-date'>{date}</p>
                                <h1 className='card-temp'>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                <p className='card-desc'><img src={iconUrl} alt="icon" />{weather.weather[0].description}</p>
                                <img  src={image} alt="image" className='img-fluid rounded-start image' />
                            </div>
                            <div className='col-md-7'>
                                <div className='card-body text-start mt-2 '>
                                    <h5 className='card-text'>{(weather.main.temp - 273.15).toFixed(1)} °C : دمای هوا </h5>
                                    <h5 className='card-text'>{weather.main.humidity} % : رطوبت هوا </h5>
                                    <h5 className='card-text'>{weather.wind.speed} m/s : سرعت باد</h5>
                                </div>
                                <hr />
                               <CardList showData={showData} weather={weather} forecast={forecast} iconUrl={iconUrl}/>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className="text-light">اطلاعاتی یافت نشد</h2>
            )
            }
        </div >
    );
}

export default Card;