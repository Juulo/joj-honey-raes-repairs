import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = (props) => {
    return(
        // Link basically tells the browser "hey set the url to this link please" which then gets routed to a component
        <ul className="navbar">
            <div className="navbar_item active">
                <Link className="navbar_link" to="/customers">Customers</Link>
            </div>
            <div className="navbar_item active">
                <Link className="navbar_link" to="/employees">Employees</Link>
            </div>
            <div className="navbar_item active">
                <Link className="navbar_link" to="/tickets">Tickets</Link>
            </div>
            <div className="navbar_item active">
                <Link className="navbar_link" to="/login">Logout</Link>
            </div>
        </ul>
    )
}