import React from 'react'
import "./Loading.css"

export const Loading = () => {
    return (
        <>
            <section className="loading-container">
                <div className="boxes">
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <h1 className="loading-txt">Loading...</h1>
            </section>
        </>
    )
}
