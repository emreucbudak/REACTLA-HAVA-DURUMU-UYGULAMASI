import React from 'react'
import ListWeathers from './ListWeathers';

function AddWeather({ weather }) {
    const a = weather;


    return (
        <div>
            <div className='showWeather'>
                {
                    a.map((veri,index) => {
                        return <ListWeathers veri = {veri} key={index}/>
                    })
                }

            </div> 
        </div>
    )
}

export default AddWeather