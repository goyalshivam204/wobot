import React from 'react'
import logo from "../src/assets/images/logo.png"
import Card from './Card'
import StyledHomepage from './Components/StyledHomepage'

function Homepage() {
  return (
    <StyledHomepage>
      <img src={logo} className="logo" alt="" />
      <Card/>
      <div className='center'><a href="https://github.com/goyalshivam204">Terms of use</a> | <a href="https://github.com/goyalshivam204">Privacy Policies</a> </div>
    </StyledHomepage>

  )
}

export default Homepage