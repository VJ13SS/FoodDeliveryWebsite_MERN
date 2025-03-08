import { NavLink } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option">
                    <img src="./Images/add_icon.png" alt="" />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/list' className="sidebar-option">
                    <img src="./Images/order_icon.png" alt="" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/orders' className="sidebar-option">
                    <img src="./Images/order_icon.png" alt="" />
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}