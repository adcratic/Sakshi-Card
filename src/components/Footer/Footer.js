import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import emailjs from 'emailjs-com';

const Footer = () => {

    const backToTop = ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

    }

    const form = useRef();

    const [result, setresult] = useState(false)

    const viewMap = ()=>{
        window.open("https://www.google.co.in/maps/place/Bhagalpur,+Bihar/@25.24035,86.9567866,13433m/data=!3m1!1e3!4m5!3m4!1s0x39f049f79910fbc7:0x9e3efe37aca8e227!8m2!3d25.242453!4d86.9842256");
    }

    const openLink = ()=>{
        window.open("https://www.adcratic.com/");
    }

    const contactNumber= ()=>{
        window.open("https://wa.me/8872922886");
    }

    const mailTo = ()=>{
        const emailTo = "harshmanoor@gmail.com";
        const emailCC = "";
        const emailSub = "";
        const emailBody = "";
        window.location.href = "mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody;
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5aez2hn', 'template_fbytwnj', form.current, 'user_LMyq1IfdRo9qId3kT5zNd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();   
        setresult(true);
    };

    return (
        <>
          <footer className="footer-section">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt"></i>
                                <div onClick={viewMap} className="cta-text">
                                    <h4>Find us</h4>
                                    <span>Bhagalpur, Bihar</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text" onClick={contactNumber}>
                                    <h4>Call us</h4>
                                    <span>9876543210</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text" onClick={mailTo}>
                                    <h4>Mail us</h4>
                                    <span>sakshicard@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <Link to="#" className="footer-logo-link" onClick={backToTop}>
                                        {/* <img src="" class="img-fluid" alt="Sakshi Card" /> */}
                                        <h4>Sakshi Card</h4>
                                    </Link>
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                    elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <Link to="#"><i class="fab fa-facebook-f facebook-bg"></i></Link>
                                    <Link to="#"><i class="fab fa-twitter twitter-bg"></i></Link>
                                    <Link to="#"><i class="fab fa-instagram google-bg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Explore</h3>
                                </div>
                                <ul>
                                    <li><Link to="/" onClick={backToTop}>Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/categories">Categories</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Newsletter</h3>
                                </div>
                                <div class="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <input type="email" placeholder="Email Address" name="from_email"/>
                                        <button type="submit"><i className="fab fa-telegram-plane"></i></button>
                                        {result ? alert("Your message has been sucessfully sent. We will contact you soon.") : null}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>&copy; Sakshi Card. All rights reserved</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <p style={{color:"#878787"}}>Designed By: <span target="_blank" className="companyLink" onClick={openLink} >Adcratic Studios</span></p>
                            {/* <div className="footer-menu">
                                <ul>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Categories</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
