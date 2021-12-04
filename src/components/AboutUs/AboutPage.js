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
                    <p>Sakshi Card empowers thousand of businesses across Bihar to outstand themselves in the market. Our wide range of quality products at affordable price. Our commitment to helping you promote your business is stronger than ever. We’re confident you’ll be 100% satisfied with our products, quality, design experience and attentive service.
                     </p>
                </div>    
            </div>

            <Features/>
        </>
    )
}

export default AboutPage
