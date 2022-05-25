import React from 'react'
import './Sidebar.css'
import { LineStyle, AnalyticsOutlined, TrendingUp, VerifiedUser, ProductionQuantityLimits } from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_container">
            <div className="sidebar_header">
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2043" alt="" className="sidebar_avt" />
                    <div className="sidebar_list_items">
                        Con meo ngu ngoc
                    </div>
                
            </div>
            
            <div className="sidebar_header">
                <h3 className="sidebar_title">Dashboard</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_items">
                        <LineStyle className="sidebar_list_logo"/>
                        Home
                    </li>
                    <li className="sidebar_list_items">
                        <AnalyticsOutlined className="sidebar_list_logo"/>
                        Analytic
                    </li>
                    <li className="sidebar_list_items">
                        <TrendingUp className="sidebar_list_logo"/>
                        Trending
                    </li>
                </ul>
                
            </div>

            <div className="sidebar_header">
                <h3 className="sidebar_title">Quick menu</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_items">
                        <VerifiedUser className="sidebar_list_logo"/>
                        User
                    </li>
                    <li className="sidebar_list_items">
                        <ProductionQuantityLimits className="sidebar_list_logo"/>
                        Product
                    </li>
                    <li className="sidebar_list_items">
                        <TrendingUp className="sidebar_list_logo"/>
                        Transaction
                    </li>
                    <li className="sidebar_list_items">
                        <TrendingUp className="sidebar_list_logo"/>
                        Report
                    </li>
                </ul>
                
            </div>
            <div className="sidebar_header">
                <h3 className="sidebar_title">Notification</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_items">
                        <LineStyle className="sidebar_list_logo"/>
                        Mail
                    </li>
                    <li className="sidebar_list_items">
                        <AnalyticsOutlined className="sidebar_list_logo"/>
                        Feedback
                    </li>
                    <li className="sidebar_list_items">
                        <TrendingUp className="sidebar_list_logo"/>
                        Message
                    </li>
                </ul>
                
            </div>
            <div className="sidebar_header">
                <h3 className="sidebar_title">Staff</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_items">
                        <LineStyle className="sidebar_list_logo"/>
                        Manage
                    </li>
                    <li className="sidebar_list_items">
                        <AnalyticsOutlined className="sidebar_list_logo"/>
                        Analytic
                    </li>
                    <li className="sidebar_list_items">
                        <TrendingUp className="sidebar_list_logo"/>
                        Report
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}
