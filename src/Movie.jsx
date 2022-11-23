import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Movie = () => {


    const [data, setData] = useState([])

    const fetchmovi = () => {
        axios.get(`http://www.omdbapi.com/?s=bhoot&apikey=ee04f80e`)
            .then((response) => {
                // console.log(response)
                setData(response.data.Search)
            })

    }

    // const inputEvent = (e) => {
    //     setData(e.target.value)
    // }

    return (
        <>
            <div>Movie</div>
            <input type="text" placeholder='ener movie'  />
            <button onClick={fetchmovi}>Movei</button>
            {
                data.map((val, index) => {
                    return (
                        <>
                        <div key={index}>
                            <h1>{val.Title}</h1>
                            <p>{val.Year}</p>
                            <img src={val.Poster} alt="" />
                            </div>
                        </>
                    )
                })
            }


        </>
    )
}

export default Movie