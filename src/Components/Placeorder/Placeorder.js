
import React,{useState,useEffect} from 'react'
import Header from '../Homepage/Header/Header'
import music from '../../assets/music.png'
import './Placeorder.css'
import { useNavigate } from 'react-router-dom'
import MobileFooter from '../MobileFooter/MobileFooter'
import Products from '../../assets/Products.png'
const Placeorder = () => {
  const navigate=useNavigate();
    
  const backtocart=(e)=>{
    e.preventDefault();
    navigate('/orders');
    }
    const placeOrder=(e)=>{
        e.preventDefault();
        navigate('/lastpage');
    }
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
    }, []);
  
 
    const total = cartItems.reduce((acc, cartItem) => {
      const itemTotal = cartItem.price * cartItem.selectedQuantity;
      return acc + itemTotal;
    }, 0);
  return (
    <div className='place'>
      
      <Header/>
        <div className='place_para'>
            <p className='place_span'><img src={music} alt='/music' height={'45px'} width={'45px'}></img>Musicart </p>
            <span>Home/Checkout</span>
        </div>
        <div className='back__button'onClick={(e)=>backtocart(e)}>
            <button onClick={backtocart}>
                Back to cart
            </button>
        </div>
        <div className='bac'>
            <button onClick={(e)=>backtocart(e)} >
                <img src={Products} alt='/products'></img>
            </button>
        </div>
        <h3 className='place__h3'>Checkout</h3>
        <div className='checkout'>
       
            <ol className='address'>
                <div className='info'>
                    <li>Delivery address</li>
                    <div className='info-conten'>
                        <p>Akash Patel  </p>
                        <p>104</p>
                        <p>kk hh nagar, Lucknow</p>
                        <p>Uttar Pradesh 226025</p>
                    </div>
                </div>
                <div className='info'>
                    <li>Payment method</li>
                    <div className='info-conten'>
                        <p>Pay on delivery (Cash/Card)</p>  
                    </div>
                </div>
                <div className='info'>
                    <li>Review items and delivery</li>
                    <div className='info-content'>
                        {cartItems.map((cartItem, index) => (
                            <div key={index} className='cart-item'>
                                <img src={cartItem.imageUrl1} alt='head' height={'100px'} width={'100px'}></img>
                                <h4>{cartItem.headphoneName}</h4>
                                <p>Color: {cartItem.color}</p>
                                <p>In Stock</p>
                                <h5>Estimated delivery :</h5>
                                <h5>Monday — FREE Standard Delivery</h5>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='place__footer'>
                    <button onClick={(e)=>placeOrder(e)}>Place your Order</button>
                    <div>
                        <p className='aside__para2'>Order Total : {total.toFixed(2)}</p>
                        <p className='para__3'>By placing your order, you agree to Musicart privacy notice and conditions of use.</p>
                    </div>
                </div>
            </ol>
            <div className='aside'>
                <div className='aside__button'>
                    <button onClick={(e)=>placeOrder(e)}>Place your Order</button>
                </div>
                <p className='aside__para1'>By placing your order, you agree to Musicart privacy
                    notice and conditions of use.</p>
                <div className='order__summary'>
                    <h2>Order Summary</h2>
                    <p>Items : <span>₹{total.toFixed(2)}</span></p>
                    <p>Delivery : <span>₹45.00</span></p>
                </div>
                <p className='aside__para2'>Order Total : <span>₹{(total + 45).toFixed(2)}</span></p>
            </div>
        </div>
        <MobileFooter/>
        <p className='pplace_footer'>Musicart | All rights reserved</p>
    </div>
  )
}

export default Placeorder