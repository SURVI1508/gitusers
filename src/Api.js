import React, { useState, useEffect } from 'react'

const Api = () => {


    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://api.instantwebtools.net/v1/airlines')
            .then(response => response.json())
            .then(data => setNews(data)
            )
    }, [])
    console.log(news)
    return (
        <div>
            {
                news.map((item, i) => {
                    return (
                        <>
                            <div className='one'>
                                <div
                                    className="image"><img style={{
                                        // borderRadius: "50%",
                                        height: "50px",
                                        width: "50px",

                                    }} src={item.logo} alt="" /></div>
                                <div className="description">
                                    <h4>{item.name}</h4>
                                    <p>{item.country}</p>
                                </div>
                                <button className='readMore'>Read More</button>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Api