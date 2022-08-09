
import "../styles/landingPage.css"
import "../styles/searchBar.css"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

export const Landing = () => {
    const [userName, setUserName] = useState('');

    const [data, setData] = useState();
    useEffect(() => {
        axios.get(`https://api.github.com/users/${userName}`)
            .then(function (response) {                
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });            
    }, [userName]);

    console.log(data)
    const ehandler = (e) => {
        setUserName(e.target.value)
    }
   
    return (
        <>
            <div className="container">
                <div className="subDiv">
                    <h1>Github Profile</h1>
                    <h3>Generate your Github Profile</h3>
                    <div className="container main">
                        <div className="row mt-5">
                            <div className="form">
                                <div className="form__group">
                                    <input type="text" className="form__input" id="name" placeholder="Github Username" required="yes" value={userName} onChange={ehandler} />
                                    <Link to="/info" state={data}><button type="submit" className="searchBTN">Generate</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}