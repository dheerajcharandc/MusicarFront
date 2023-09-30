import React, { useState } from "react";
import Music from '../../assets/music.png'
import { Link } from "react-router-dom";
import { RegisterUser } from "../../apicalls/Signup_api";
import { useNavigate } from "react-router-dom";
import './Signup.css'
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="signup">
        <p className='para_login' ><img src={Music} alt='/music' height={'45px'} width={'45px'}></img>Musicart</p>
        <p className="wel">WELCOME</p>
        <div className='signup__form'>
       
          <div className='signup_container'>
            <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              RegisterUser(e, name, password, email, mobileNumber)
                .then((Result) => {
                  if (Result === true) {
                    alert("signin successful!");
                    navigate("/");
                  }
                })
                .catch((error) => {
                  console.error("Error during signup", error);
                });
            }}
            >
                <h2>Sign in<span>.</span><p>Don’t have an account?</p> </h2>
                <div className='formm'>
                <p>Your name</p>
                <input
                  type='text'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <p>Email Id</p>
                <input 
                  type='email' 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <p>Mobile number</p>
                <input 
                  type='number' 
                  required
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                ></input>
                <p>Password</p>
                <input 
                  type='password' 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                </div>
                <p className='para_desc'>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.
                </p>
                <div className='signup__button'>
                    <button  type="submit" >Continue</button>
                </div>
                <p className='para_desc'>By continuing, you agree to Musicart privacy notice and conditions<br></br> of use.</p>
                </form>
           </div>
         
           <p className='tosignin' >Already have an account? <Link to='/login'>Sign in</Link></p>
            
        </div>
        <p className='login_footer'>Musicart | All rights reserved</p>
        
    </div>
  )
}

export default Signup