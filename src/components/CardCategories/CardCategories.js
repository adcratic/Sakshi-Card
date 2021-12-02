import React, {useState} from 'react'
import { Loading } from '../Loading/Loading'
import "./CardCategories.css"
import Sidebar from './Sidebar'
import { CardData, TrendingData, PremiumData } from './Sidebar_Data'


function CardCategories() {

    

    const [showCard, setshowCard] = useState(true);

    setTimeout(()=>{
        setshowCard(false);
    },1500)

    return (

        <>
            <div className="s-layout">
                <Sidebar/>
                {/* Main Content */}
                <main className="s-layout__content">

                    {showCard ? <Loading/> : <>
                    <div className="card-container" id="trendingCard">
                        <h1><i class="fas fa-fire"></i><span>Trending</span></h1>
                        <div className="card-col-container">
                            {TrendingData.map((item)=>{
                                const {id,imgSrc,title} = item
                                return(
                                    <div className="card-pallet">
                                        <img id={id} src={imgSrc} alt="card"/>
                                        <h4>{title}</h4>                               
                                    </div>
                                )
                            })}                            
                            
                        </div>                           
                    </div>
                    

                    
                    <div className="card-container" id="allCard">
                        <h1><i class="far fa-file"></i><span>All Cards</span></h1>
                        <div className="card-col-container">
                            {CardData.map((item)=>{
                                const {id,imgSrc,title} = item
                                return(
                                    <div className="card-pallet">
                                        <img id={id} src={imgSrc} alt="card"/>
                                        <h4>{title}</h4>                               
                                    </div>
                                )
                            })}                            
                            
                        </div>                           
                    </div>

                    <div className="card-container" id="premiumCard">
                        <h1><i class="far fa-gem"></i><span>Premium</span></h1>
                        <div className="card-col-container">
                            {PremiumData.map((item)=>{
                                const {id,imgSrc,title} = item
                                return(
                                    <div className="card-pallet">
                                        <img id={id} src={imgSrc} alt="card"/>
                                        <h4>{title}</h4>                               
                                    </div>
                                )
                            })}                            
                            
                        </div>                           
                    </div>

                    <div className="card-container" id="businessCard">
                        <h1><i class="fas fa-briefcase"></i><span>Business</span></h1>
                        <div className="card-col-container">
                            {PremiumData.map((item)=>{
                                const {id,imgSrc,title} = item
                                return(
                                    <div className="card-pallet">
                                        <img id={id} src={imgSrc} alt="card"/>
                                        <h4>{title}</h4>                               
                                    </div>
                                )
                            })}                            
                            
                        </div>                           
                    </div>
                    </>}

                </main>
            </div>

        </>
    )
}

export default CardCategories
