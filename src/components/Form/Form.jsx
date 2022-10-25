import React, { useState } from 'react';

const Form = ({ newLocation }) => {
    const [city, setCity] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        console.log({ city });
        if (city === '' || !city) return;
        newLocation(city)
       
        
    }


    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className='input-group mb-3 mx-auto'>
                        <input type="text" className='form-control' dir='rtl' placeholder='شهر مورد نظر خود را وارد کنید ...' onChange={e => setCity(e.target.value)} />
                        <button className='btn btn-primary input-group-text' type='submit'>جستجو </button>
                </div>
            </form>
        </div>
    );
};

export default Form;