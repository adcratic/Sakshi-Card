import React from 'react'

export default function Features() {

    const features_data = [
        {
            icon_color: "#ff0053",
            para : "25 years of design experience.",
            icon: "fas fa-pencil-ruler"
        },
        {
            icon_color: "#ac39ff",
            para : "Every design at reasonable cost",
            icon: "fas fa-dollar-sign"
        },
        {
            icon_color: "#68cc45",
            para : "Deliver best services to you.",
            icon: "fas fa-box"
        },
        {
            icon_color: "#007aff",
            para : "We work to make you smile.",
            icon: "far fa-smile"
        }
        
    ]

    return (
        <>
            <div className="features-container">
                <h1>Why choose <span>Sakshi Card </span>?</h1>
                <div className="features-col-container">
                    {features_data.map((item)=>{
                        const {icon_color,para,icon} = item;
                        return(
                            <div className="features-col">
                                <i class={icon} style={{color: icon_color}}></i>
                                <p>{para}</p>
                            </div>
                        )
                    })}
                    
                </div>                           
            </div>
        </>
    )
}
