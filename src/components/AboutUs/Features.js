import React from 'react'

export default function Features() {
    return (
        <>
            <div className="features-container">
                <h1>Our Features. <span>Reasons to shop with us. </span></h1>
                <div className="features-col-container">
                    <div className="features-col">
                        <i class="fas fa-pencil-ruler" style={{color:"#ff0053"}}></i>
                        <p>This is the features paragraph.</p>
                    </div>
                    <div className="features-col">
                        <i class="fas fa-dollar-sign" style={{color:"#ac39ff"}}></i>
                        <p>Every design with reasonable design.</p>
                    </div>                    
                    <div className="features-col">
                        <i class="fas fa-box" style={{color:"#68cc45"}}></i>
                        <p>This is the features paragraph.</p>
                    </div>
                    <div className="features-col">
                        <i class="far fa-smile" style={{color:"#007aff"}}></i>
                        <p>This is the features paragraph.</p>
                    </div>
                    
                </div>                           
            </div>
        </>
    )
}
