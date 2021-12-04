import React, {useState} from 'react'
import "./Sidebar.css"
import { SidebarData } from './Sidebar_Data'
import { Link } from 'react-scroll'

function Sidebar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            
                {/* Sidebar */}
                <div className="sidebar">
                    <div className = "sidebar-menu-icon">
                        <i className={click ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}></i>
                    </div>

                    <ul className={click ? "sidebar-menu active" : "sidebar-menu"}>
                        {SidebarData.map((item, index) => {
                            const {cName,id,icon,title} = item;
                                return(
                                    <li className="sidebar-item">
                                        <Link onClick={closeMobileMenu} className={cName} to={id} spy={true} smooth={false}>
                                            <i class={icon}></i><em>{title}</em>
                                        </Link>
                                    </li>
                                )
                        })}
                    </ul>
                </div>

        </>
    )
}

export default Sidebar
