import React from 'react'
import { useState } from 'react'

const Khabar = () => {
    const [data, setdata] = useState("")
    const submit = () => {



        ////


        fetch(`https://newsapi.org/v2/everything?q=apple&from=2022-11-15&to=2022-11-15&sortBy=popularity&apiKey=c078f1fa5a19429296aa05bb01c75218`)
            .then((response) => {
                return response.json()
            }).then((actualData) => {
                // console.log(actualData)
                setdata(actualData)
            })
    }
    return (
        <>
            <button onClick={submit}>NEWS</button>
            <h1>{data.articles[0].author}</h1>
            {/* <p>{data.title[0].content}</p> */}
        </>
    )
}

export default Khabar