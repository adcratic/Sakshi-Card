import React, {useRef} from 'react'
import "./ContactUs.css"
import emailjs from 'emailjs-com';

function ContactUs() {

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
         <div className="background">
            <div className="container">
                <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button shut"></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                        <div className="screen-header-right">
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                        </div>
                    </div>
                <div className="screen-body">
                    <div className="screen-body-item left">
                    <div className="app-title">
                        <span>CONTACT</span>
                        <span>US</span>
                    </div>
                    <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                    </div>
                    <div className="screen-body-item">
                    <form ref={form} onClick={sendEmail} className="app-form">
                        <div className="app-form-group">
                        <input className="app-form-control" placeholder="NAME"/>
                        </div>
                        <div className="app-form-group">
                        <input className="app-form-control" placeholder="EMAIL"/>
                        </div>
                        <div className="app-form-group">
                        <input className="app-form-control" placeholder="CONTACT NO"/>
                        </div>
                        <div className="app-form-group message">
                        <input className="app-form-control" placeholder="MESSAGE"/>
                        </div>
                        <div className="app-form-group buttons">
                        <button className="app-form-button">CANCEL</button>
                        <button type="submit" className="app-form-button">SEND</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                
            </div>
            </div>
   
        </>
    )
}

export default ContactUs
