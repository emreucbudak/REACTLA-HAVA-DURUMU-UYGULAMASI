import React from 'react'

function ListWeathers({ veri }) {
    console.log(veri)
    const { config, data, headers, request } = veri
    console.log(data)
    return (
        <div>
            <div className='showWeatherList'>
                <div>
                    <p>Şehir = {data.location.name}</p>
                    <p>Ülke = {data.location.country}</p>
                </div>
                <div>
                    <p>Sıcaklık = {data.current.temperature}</p>
                    <p>Hissedilen = {data.current.feelslike}</p>
                </div>
                <div>
                    <p>Açıklama = {data.current.weather_descriptions}</p>
                </div>
            </div>
        </div>
    )
}

export default ListWeathers