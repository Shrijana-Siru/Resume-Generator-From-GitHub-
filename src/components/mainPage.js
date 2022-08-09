import { IoMdArrowRoundBack } from "react-icons/io"
import { useNavigate, useLocation } from "react-router-dom"

import "../styles/info.css"
import profile from "../assets/profile.png"
import { AiOutlineMail } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"
import { BiBuildings } from "react-icons/bi"
import { GoLocation } from "react-icons/go"
import { AiOutlineCalendar } from "react-icons/ai"
import { BsGlobe } from "react-icons/bs"
import "../styles/homepage.css"

export const Home = () => {    
    const userDetails = useLocation().state
    console.log("UserDetails: ", userDetails)
    const navigate = useNavigate();
    const navInfo = () => {
        navigate('/');
    };
    
    return (
        <>
            <div className="container mt-5">
                <h1><IoMdArrowRoundBack className="backArrow" onClick={navInfo} /></h1>
            </div>
            <div className="container butn">
                <button type="submit" className="searchBTN mb-3">Hire Me</button>
            </div>
            <div className="container mt-5">
                <div className="container maindiv">
                    <div className="logo">
                        <img alt="profile-icon" src={profile} />
                    </div>
                    <div className="profile-id">
                        <h1>{userDetails.name}</h1>
                        <h3>@{userDetails.login}</h3>
                    </div>
                    <div className="container follow d-flex justify-content-center align-items-center gap-3 mt-3">
                        <div>
                            <h2>{userDetails.followers}</h2>
                            <h3>Followers</h3>
                        </div>
                        <div>
                            <h2>{userDetails.following}</h2>
                            <h3>Following</h3>
                        </div>
                        <div>
                            <h2>{userDetails.public_repos}</h2>
                            <h3>Repository</h3>
                        </div>
                    </div>
                    <div className="info mt-3">
                        <div className="right content-info">
                            <div className="row">
                                <div className="col-7">
                                    <AiOutlineMail /> Email
                                    <h5>{userDetails.email}</h5>
                                </div>
                                <div className="col-5">
                                    <BiBuildings /> Organization
                                    <h5> {userDetails.company}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                    <GoLocation /> Location
                                    <h5>{userDetails.location} </h5>
                                </div>
                                <div className="col-5">
                                    <AiOutlineCalendar /> Joined Date
                                    <h5>{userDetails.created_at} </h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                    <FiTwitter /> Twitter
                                    <h5>{userDetails.twitter_username} </h5>
                                </div>
                                <div className="col-5">
                                    <BsGlobe /> Website
                                    <h5>{userDetails.blog} </h5>
                                </div>
                            </div>
                        </div>
                        <div className="left">
                            <h5>Bio</h5>
                            <p>{userDetails.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}