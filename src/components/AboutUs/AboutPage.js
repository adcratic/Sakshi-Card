import React from 'react'
// import { Link } from 'react-router-dom'
import "./AboutPage.css"
import Features from './Features'

const AboutPage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="cus-div">
                    <div className="content">
                        <h2>About Us</h2>
                        {/* <span><Link className="back-link" to="/">Home/About</Link></span> */}
                    </div>
                </div>
            </div>
            
            <div class="about-container">
                <div class="about-img">
                    <img src="images/about-us.jpg" alt="who we are"/>
                </div>
                <div class="about-txt">
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet. Qui harum Quis sit quae atque eum quia impedit
                        est eligendi eaque et nostrum autem et minima unde est 
                        dolor explicabo. Et numquam et quisquam numquam eum voluptatum.<br/><br/>
                        Lorem ipsum dolor sit amet. Qui harum Quis sit quae atque eum quia impedit
                        est eligendi eaque et nostrum autem et minima unde est 
                        dolor explicabo. Et numquam et quisquam numquam eum voluptatum.Et numquam 
                        et quisquam numquam eum voluptatum. Et numquam et quisquam numquam eum 
                        voluptatum. Et numquam et quisquam numquam eum voluptatum.
                     </p>
                </div>    
            </div>

            <Features/>
        </>
    )
}

export default AboutPage
