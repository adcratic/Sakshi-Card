import React from 'react'
import "./Error.css"
import { Link } from 'react-router-dom'

const refreshPage = ()=>{
    window.location.reload();
    console.log("Page refreshed")
}

const Error = () => {
    return (
        <>
            <section>
                <div className="error_img">
                    <img src="images/error.jpg" alt="page not found"/>
                </div>
                <div className="home_btn">
                    <button onClick={refreshPage}><i class="fas fa-redo"></i>Try Again</button>
                    <Link to="/"><button><i class="fas fa-arrow-left"></i>Back To Home</button></Link>
                </div>
            </section>
        </>
    )
}

export default Error
