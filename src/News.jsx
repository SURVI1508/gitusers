import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './news.css'
const News = () => {

    const [news, setNews] = useState([])

    const getNews = () => {
        axios.get(`
        https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c078f1fa5a19429296aa05bb01c75218`)
            .then((response) => {
                // console.log(response)
                setNews(response.data.articles)
            })
    }


    return (
        <div><h1>NEWS</h1>

            <button onClick={getNews}>NEWS</button>

            {
                news.map((val) => {
                    return (
                        <>
                            {/* <div>{getNews}</div> */}
                            <h1>{val.author}</h1>
                            <p>{val.title}</p>
                            <img src={val.urlToImage} alt="" />
                        </>
                    )
                })
            }
        </div>
    )
}
 
export default News