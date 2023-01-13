import React,{useState} from 'react'
import header_icon from "../src/assets/images/header_icon.png"
import StyledCard from './Components/StyledCard'
import StyledInput from './Components/StyledInput';
import StyledSelect from './Components/StyledSelect';
import StyledSizeOption from './Components/StyledSizeOption';
import StyledSubmitButton from './Components/StyledSubmitButton';
import StyledCardLogo from './Components/StyledCardLogo';
function Card() {

  const [companySize ,setCompanySize]= useState("1-20");
  const companySizeChangeHandler = (e) => {
    e.preventDefault();
    setCompanySize(e.target.value)
  }

  return (
    <StyledCard>

      <StyledCardLogo src={header_icon} />
      
      <h2 className='center'>It's delight to have you onboard</h2>
      <p className='center'>Help us know you better</p>
      <p >(This is how we optimize Wobot as per your business needs)</p>
      <form action="">
      <div className="form-group">
          <label htmlFor="company_name" >Company Name</label>
          <StyledInput placeholder="e.g. Example inc" id="company_name" name="company_name" type="text"/>
      </div>
      <div className="form-group">
          <label htmlFor="industry">Industry</label>
          <StyledSelect name="industry" id="industry">
            <option value="Technology" default>Technology</option>
            <option value="Marketing">Marketing</option>
            <option value="Transport" selected>Transport</option>
            <option value="Research">Research</option>
            <option value="Accounting">Accounting</option>
          </StyledSelect>
      </div>
      <div className='form-group'>
          <p>Company Size</p>
          <StyledSizeOption companySize={companySize} onClick={companySizeChangeHandler} value="1-20" >1-20</StyledSizeOption>
          <StyledSizeOption companySize={companySize} onClick={companySizeChangeHandler} value="21-50" >21-50</StyledSizeOption>
          <StyledSizeOption companySize={companySize} onClick={companySizeChangeHandler} value="51-200" >51-200</StyledSizeOption>
          <StyledSizeOption companySize={companySize} onClick={companySizeChangeHandler} value="200-500" >200-500</StyledSizeOption>
          <StyledSizeOption companySize={companySize} onClick={companySizeChangeHandler} value="500+" >500+</StyledSizeOption>

      </div>
        <StyledSubmitButton>
          Get Started
        </StyledSubmitButton>
      </form>
    </StyledCard>
   
  )
}

export default Card