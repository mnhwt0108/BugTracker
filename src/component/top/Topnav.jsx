import React from 'react'
import './topnav.css'


function Topnav() {
  return (
    <div className='topnav'>
        <div className='topnav_container'>
            
            <div className="topnav_container--left">
                
                <span className="topnav_logo">ADMIN</span> 
            </div>
            <div className="topnav_container--right">right</div>
        </div>
    </div>
  )
}

export default Topnav;
