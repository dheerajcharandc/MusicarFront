import React from 'react'
import './Header.css'
import Phone from '../../../assets/phone.png'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate=useNavigate();
    
    const handleLogout = () => {
      localStorage.removeItem("userData");
      navigate("/");  
    };
    const toCreatee=()=>{
        navigate('/signup');
    }
    const toLogin=()=>{
        navigate('/login');
    }
    const isAuthenticated = !!localStorage.getItem("userData");
    
  return (
    <div className='header'>
        <div className='contacts'>
            <img src={Phone} alt='/phone' width={'18px'} height={'24px'}></img>
            <span>9799999933</span>
        </div>
        <p>Get 50% off on selected items | Shop Now</p>
    
        <div className="buttons">
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <button onClick={toLogin}>Login</button>
          <span>|</span>
          <button onClick={toCreatee}>Signup</button>
        </>
      )}
    </div>
    </div>
  )
}

export default Header