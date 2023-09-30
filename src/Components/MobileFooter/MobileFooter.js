import React,{useEffect,useState} from 'react'
import './MobileFooter.css'
import { useNavigate } from 'react-router-dom'
import Home from '../../assets/Home.png'
import Logout from '../../assets/Logout.png'
import tocart from '../../assets/tocart.png'

const MobileFooter = () => {

  const navigate=useNavigate();
   
    const handleLogout = (e) => {
      e.preventDefault();
      localStorage.removeItem("userData");
      navigate("/"); 
    };
    const handleLogin = (e) => {
      e.preventDefault();
      navigate("/login"); 
    };
    const toocart = (e) => {
      e.preventDefault();
      navigate("/orders"); 

    };
    const tooHome = (e) => {
      e.preventDefault();
      navigate("/"); 

    };
    const [isUserLogIn, setIsUserLogIn] = useState(false);
    useEffect(() => {
      const userToken = localStorage.getItem('userData');
      setIsUserLogIn(!!userToken); 
    }, []);
  return (
    <div className='bottom__buttons' >
    <button className='home__button' onClick={(e)=>tooHome(e)} >
        <img src={Home} alt='/hh'></img>
        <p>Home</p>
    </button>
    <button className='home__button' onClick={(e)=>toocart(e)}>
        <img src={tocart}alt='/hh'></img>
        <p>Cart</p>
    </button>
   {isUserLogIn ?<button className='home__button' onClick={(e)=>handleLogout(e)} >
        <img src={Logout} alt='/hh'></img>
        <p>Logout</p>
    </button>:<button className='home__button' onClick={(e)=>handleLogin(e)} >
        <img src={Logout} alt='/hh'></img>
        <p>Login</p>
    </button>}
  </div>
  )
}

export default MobileFooter
