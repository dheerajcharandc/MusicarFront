import React from 'react'
import music from './../../assets/music.png'
import './Lastpage.css'
import cele from './../../assets/cele.png'
import MobileFooter from '../MobileFooter/MobileFooter'
import { useNavigate } from 'react-router-dom'

const Lastpage = () => {
  const navigate=useNavigate();
    
    const toHomepage=()=>{
        navigate('/');
        localStorage.removeItem('cart');
    }
  
  return (
    <div className='lastpage'>
        
          <p className='lastpage_span'><img src={music} alt='/music' ></img>Musicart </p>
        
        <div className='center-container'>
          <div className='done'>
            <div className='last_img'>
              <img src={cele} alt='cele'></img>
            </div>
            <p className='para__1'>Order is placed successfully!</p>
            <p className='para__2'>You  will be receiving a confirmation email with order details</p>
            <div className='last__button'>
              <button onClick={toHomepage} >Go back to Home page</button>
            </div>
          </div>
        </div>
        <p className='lastpage_footer'>Musicart | All rights reserved</p>
        <MobileFooter/>
    </div>
  )
}

export default Lastpage