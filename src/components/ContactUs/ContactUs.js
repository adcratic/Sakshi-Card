import React, {useRef, useState} from 'react'
import "./ContactUs.css"
import emailjs from 'emailjs-com';

function ContactUs() {

    const form = useRef();

    const [result, setresult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t6pshh2', 'template_pkx0sqj', form.current, 'user_LMyq1IfdRo9qId3kT5zNd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();   
        setresult(true)
    };

    const clearInput = (e)=>{e.target.reset()};

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
                    <form ref={form} className="app-form" onSubmit={sendEmail}>
                        <div className="app-form-group">
                        <input className="app-form-control" type="text" name="NAME" placeholder="Name"/>
                        </div>
                        <div className="app-form-group">
                        <input className="app-form-control" type="email" name="EMAIL" placeholder="E-Mail"/>
                        </div>
                        <div className="app-form-group">
                        <input className="app-form-control" type="text" name="CONTACT" placeholder="Contact No"/>
                        </div>
                        <div className="app-form-group message">
                        <input className="app-form-control" type="text" name="MESSAGE" placeholder="Message"/>
                        </div>
                        <div className="app-form-group buttons">
                        <button className="app-form-button" onClick={()=>clearInput}>CANCEL</button>
                        <button type="submit" className="app-form-button">SEND</button>
                        {result ? alert("Your message has been sucessfully sent. We will contact you soon. \n Thankyou.") : null}
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
