import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavStyle } from './nav.style'
import Logo from "../Images/images/Logo.png"


export const Nav = () => {
  return (
    <NavStyle >
        
        <nav>
            <img src={Logo} alt="Mediesuset's logo" />
            <h1>4 - 7. juli 2022</h1>
            <ul>    
                <li><NavLink to="/">FORSIDE</NavLink></li>
                    <div className='dropdown'>
                        <li><NavLink>EVENTS</NavLink></li>
                        <div className='dropdown-content'>
                            <NavLink to="/eventlineup">LINE-UP</NavLink>
                            <NavLink to="/eventprogram">PROGRAM</NavLink>
                        </div>
                    </div>
                <li><NavLink to="#">CAMPS</NavLink></li>
                <li><NavLink to="/tickets">BILLETTER</NavLink></li>
                <li><NavLink to="#">PRAKTISK INFO</NavLink></li>
                <li><NavLink to="/login">LOGIN</NavLink></li>
            </ul>
        </nav>
    </NavStyle>
   )
}
