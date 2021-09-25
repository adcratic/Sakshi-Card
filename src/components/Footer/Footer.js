import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import emailjs from 'emailjs-com';

const Footer = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

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
                                    <Link to="/">
                                        <img src="" class="img-fluid" alt="Sakshi Card" />
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
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Categories</Link></li>
                                    <li><Link to="#">Contact</Link></li>
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
                                    <form onSubmit={sendEmail}>
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
                                <p>&copy; Adcratic. All rights reserved</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <p style={{color:"#878787"}}>Designed By: <span target="_blank" onClick="window.location.href='https://adcratic.com/';">Adcratic</span> India</p>
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
