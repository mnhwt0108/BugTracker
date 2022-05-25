import React from 'react'
import './topnav.css'
import { CircleNotificationsRounded, Public, PowerSettingsNewSharp } from '@mui/icons-material'


function Topnav() {
  return (
    <div className='topnav'>
        <div className='topnav_container'>
            
            <div className="topnav_container--left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1600px-Netflix_logo.svg.png?20220504140802" alt="" /> 
            </div>
            <div className="topnav_container--right">
                <div className="right_item">
                    <CircleNotificationsRounded />
                    <span className="right_item-badge">3</span>
                </div>
                <div className="right_item">
                    <Public />
                    {/* <span className="right_item-badge">3</span> */}
                </div>
                <div className="right_item">
                    <PowerSettingsNewSharp />
                    {/* <span className="right_item-badge">3</span> */}
                </div>
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2043" alt="" className="topnav_Avt" />
            </div>
        </div>
    </div>
  )
}

export default Topnav;
