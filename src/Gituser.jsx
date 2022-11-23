import React from 'react'
import { useState } from 'react'
import './git.css'
const Gituser = () => {

    const [userName, setUserName] = useState("SURVI1508")
    const [data, setData] = useState({})
    const onChageHandler = (e) => {
        setUserName(e.target.value)
    }

    const submit = (e) => {
        fetch(`https://api.github.com/users/${userName}`)
            .then((response) => {
                return response.json()
            }).then((actualData) => {
                // console.log(actualData)
                setData(actualData)
            })
        setUserName("")
    }


    return (
        <>
            <div className="main__container">
                <div className="heading">
                    <h1>Search Github User's</h1>
                </div>
                <div className='form'>
                    <input value={userName} type="text" placeholder='enter username' onChange={onChageHandler} />
                    <button onClick={submit}>SEARCH</button>
                </div>
                <div className='user__container'>
                    <div className="user__infoDiv">
                        <div className="avtar"><img src={data.avatar_url} alt="" /></div>
                        <h3 style={{ fontFamily: "Kaushan Script" }}>{data.name}
                            <p style={{ fontSize: "10px", letterSpacing: "2px", color: "white" }}>{data.login}</p>
                        </h3>
                        <p style={{ fontWeight: "600", letterSpacing: "1px", color: "white" }}>{data.bio}</p>
                        <div className="location"><h2>🚀</h2><p style={{ fontWeight: "600", letterSpacing: "5px", color: "white" }}>{data.location}</p></div>
                        <div className="follows">
                            <div className="repo">Public repo <p>{data.public_repos}</p></div>
                            <div className="folowers">folowers <p>{data.followers}</p></div>
                            <div className="folowing">folowing <p>{data.following}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gituser