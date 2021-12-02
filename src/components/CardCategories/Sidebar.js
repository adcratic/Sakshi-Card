import React from 'react'
import "./Sidebar.css"
import { SidebarData } from './Sidebar_Data'
import { Link } from 'react-scroll'

function Sidebar() {

    return (
        <>
            
                {/* Sidebar */}
                <div className="s-layout__sidebar">
                    <Link className="s-sidebar__trigger" to="#0">
                        <i className="fa fa-bars"></i>
                    </Link>

                    <nav className="s-sidebar__nav">
                        <ul>
                            {SidebarData.map((item)=>{
                                const {cName,id,icon,title} = item;
                                return(
                                    <li>
                                        <Link className={cName} to={id} spy={true} smooth={false}>
                                            <i class={icon}></i><em>{title}</em>
                                        </Link>
                                    </li>
                                )
                            })}                            
                        </ul>
                    </nav>
                </div>

        </>
    )
}

export default Sidebar
