import React, { useEffect, useState } from 'react';

const Form = ({ newLocation }) => {
    const [city, setCity] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        console.log({ city });
        if (city === '' || !city) return;
        newLocation(city)
    }
    const handleCity = e =>{
        setCity(e.target.value)
    }
   

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className='input-group mb-3 mx-auto'>
                        <input type="text" className='form-control' placeholder='type' onChange={handleCity } />
                        <button className='btn btn-primary input-group-text' type='submit'>جستجو </button>
                </div>
            </form>
        </div>
    );
};

export default Form;