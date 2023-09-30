import React ,{useEffect,useState} from 'react'
import './Poster.css'
import music from '../../../assets/music.png'
import girl from '../../../assets/girl.png'
import cart from '../../../assets/cart.png'
import { useNavigate } from 'react-router-dom'
const Poster = ({ cartItemCount, updateCartItemCount }) => {
  const navigate=useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  

  useEffect(() => {
    const userToken = localStorage.getItem('userData');
    setIsUserLoggedIn(!!userToken);
  }, []);

  return (
    <div className='poster'>
      <div className='card__top'>
            <div className='cart_para' >
                <p className='cart_span'><img src={music} alt='/music' height={'45px'} width={'45px'}></img>Musicart </p>
                <span>Home</span>
            </div>
            {isUserLoggedIn && <div className='cart__button'onClick={() => navigate('/orders')}>
                <img src={cart} alt='/cart' height={'15px'} width={'15px'}></img>
                <button  > {cartItemCount > 0 ? ` ${cartItemCount} in Cart` : 'View Cart'}</button>
            </div>}
        </div>
        <div className='poster_pic'>
            <div>
                <h1>Grab upto 50% off on Selected headphones</h1>
                <button>Buy Now</button>
            </div>
            <img src={girl} alt='/girl'></img>
        </div>

    </div>
  )
}

export default Poster