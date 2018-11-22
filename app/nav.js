import React from 'react';
import {NavLink} from 'react-router-dom'
import './nav.css'

const NavBar = () => (
    <div>
        <div>
            <NavLink exact className="blue" to="/">Jspang-a</NavLink> |&nbsp;
            <NavLink activeClassName="activeNar" style={{color: 'green',fontSize: '33px'}} to="/Jspangb">Jspang-b</NavLink> |&nbsp;
            <NavLink activeClassName="activeNar" to="/Jspangc">Jspang-c</NavLink>|&nbsp;
            <NavLink activeClassName="activeNar" to="/Jspangd">404Page</NavLink>|&nbsp;
            <NavLink activeClassName="activeNar" to="/redirect">Redirect</NavLink>
        </div>
    </div>
)

export default NavBar;