import React, {useRef} from 'react'
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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>Bhagalpur, Bihar</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>9876543210</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
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
                                        <input type="email" placeholder="Email Address" name="email"/>
                                        <button type="submit"><i className="fab fa-telegram-plane"></i></button>
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
                            <p style={{color:"#878787"}}>Designed By: <span target="_blank" onClick="window.location.href='https://adcratic.com/';">Adcratic</span> Studios</p>
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
