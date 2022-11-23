import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Weather = () => {
    const [city, setCity] = useState("")
    const [data, setData] = useState({
        description: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
    })

    const submit = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=aa921d304def4e2084cc4be9c09795a7`)
            .then((response) => {
                // console.log(response.data)
                setData({
                    name: response.data.name,
                    country: response.data.sys.country,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    deg: response.data.wind.deg,
                    // description:response.data.weather.[0],
                })
                setCity("")
            })

    }

    return (
        <>
            <div>Weather App
                <input autoComplete='off' type="text" placeholder='city' value={city} onChange={(e) => { setCity(e.target.value) }} />
                <input type="submit" onClick={submit} value="submit" />
                <h1>city:{data.name}</h1>
                <h3>temp_max:{data.temp_max}℃</h3>
                <h3>temp_min:{data.temp_min}℃</h3>
                <h3>temp:{data.temp}℃</h3>
                <h3>country:{data.country}</h3>
                <h3>wind:{data.deg}</h3>
            </div>
        </>
    )
}

export default Weather