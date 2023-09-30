import React, { useState } from "react";
import { LoginUser } from "../../apicalls/Login_api";

import music from '../../assets/music.png'
import './Login.css'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const navigate=useNavigate();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
  
    
    const toCreate=()=>{
        navigate('/signup');
    }
  return (
    <div className='Login'>
        <p className='para_login' ><img src={music} alt='/music' ></img>Musicart</p>
        <p className="wel">WELCOME</p>
        <div className='login__form'>
            <div className='login_container'>
            <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              LoginUser(e, identifier, password)
                .then((loginResult) => {
                  if (loginResult === true) {
                    alert("Login successful!");
                    navigate("/");
                  }
                })
                .catch((error) => {
                  console.error("Error during login:", error);
                });
            }}
          >
                <h2>Sign in<span>.</span><p>Already a customer?</p> </h2>
                <div className='form'>
                <p>Enter your email or mobile number</p>
                <input 
                    type='text'
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                ></input>
                <p>Password</p>
                <input
                    type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                </div>
                <div className='login__button'>
                    <button type='submit'>Continue</button>
                </div>
                <div className='para_desc'>
                 <p >By continuing, you agree to Musicart privacy notice and conditions of use.</p>
                </div> 
            </form>
                
           </div>
           <div className='para_new'>
                <hr className='line' />
                    New to Musicart?
                <hr className='line' />
            </div>
            <button className='tosignup' onClick={toCreate}>Create your Musicart account</button>
        </div>
        <p className='login_footer'>Musicart | All rights reserved</p>
        
   </div>
  )
}

export default Login