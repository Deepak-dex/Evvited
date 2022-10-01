import React from 'react'
import './styles.css'
import LandingImg from '../../assests/images/Landing page image.svg'

import { NavLink } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="landing">
    <img src={LandingImg} alt="App image" /> 
    <div className='landing__header'>
      <h1 className="landing__heading">Imagine if<span className='landing__heading--highlight'>Snapchat</span> had events.</h1>
      <p className="landing__description">Easily host and share events with your friends across any social media.</p>
    </div>
      <NavLink to='/create' className='landing__btn'> 🎉 Create my event </NavLink>
    </div>
  )
}
