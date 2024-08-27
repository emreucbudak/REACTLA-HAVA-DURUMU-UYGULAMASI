import React, { useState } from 'react'

function SearchWeather({addWeather}) {
    const [inputValue,setInputValue] = useState("")
    const changeV = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addWeather(inputValue);
        setInputValue("")
    }
    return (
        <div>
            <div className='search'>
                <form action="" className='form'>
                    <p>Hava Durumu Sorgulama</p>
                    <input type="text" placeholder='Şehir Giriniz' value={inputValue} onChange={changeV}/>
                    <button type='submit' onClick={onSubmit}>Ara</button>
                </form>
            </div>
        </div>
    )
}

export default SearchWeather