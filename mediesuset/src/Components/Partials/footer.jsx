import React from 'react'
import FooterLogo from '../Images/images/Hancock-logo.png'
import { FooterStyle } from './footer.style'

export const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        <h2>TILMELD NYHEDSBREV</h2>
        <p>De de seneste nyheder sendt til din indbakke</p>
        <input type="email" />
        <button>TILMELD</button><br />
        <img src={FooterLogo} alt="" />      
      </footer>
    </FooterStyle>
  )
}
