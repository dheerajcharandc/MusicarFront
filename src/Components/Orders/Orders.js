import React,{useState,useEffect} from 'react'
import './Orders.css'
import Header from '../Homepage/Header/Header'
import music from '../../assets/music.png'
import cart from '../../assets/cart.png'
import { useNavigate } from 'react-router-dom'
import Mycart from './../../assets/Mycart.png'
import Search from '../Homepage/Search/Search'
import MobileFooter from '../MobileFooter/MobileFooter'
import Products from '../../assets/Products.png'


const Orders = () => {
    const navigate=useNavigate();
    
    const backtoproduct=(e)=>{
        e.preventDefault();
        navigate('/');
      }
      
      const [cartItems, setCartItems] = useState([]);

      useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

        if (storedCart.length > 0 && typeof storedCart[0].selectedQuantity !== 'undefined') {
          setCartItems(storedCart);
        } 
        else {
          const itemsWithQuantity = storedCart.map((item) => ({ ...item, selectedQuantity: 1 }));
          setCartItems(itemsWithQuantity);
        }
      }, []);
     

      
    const quantityOptions = [];
    for (let i = 1; i <= 8; i++) {
        quantityOptions.push(
        <option key={i} value={i}>
            {i}
        </option>
        );
    }

  const handleQuantityChange = (e, index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].selectedQuantity = parseInt(e.target.value);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const total = cartItems.reduce((acc, cartItem) => {
    const itemTotal = cartItem.price *  cartItem.selectedQuantity;
    return acc + itemTotal;
  }, 0);
//   const clearcart=()=>{
//     localStorage.removeItem('cart');
//   }
  return (
    <div className='orders'>
        <Header/>
        <div className='order__search'><Search/></div>
        <div className='back'>
            <button onClick={(e)=>backtoproduct(e)} >
                <img src={Products} alt='/products'></img>
            </button>
        </div>
        <div className='card__top'>
            <div className='cart_para' >
                <p className='cart_span'><img src={music} alt='/music' height={'45px'} width={'45px'}></img>Musicart </p>
                <span>Home/View cart</span>
            </div>
            <div className='cart__button'>
                <img src={cart} alt='/cart' height={'15px'} width={'15px'}></img>
                <button >View Cart</button>
            </div>
        </div>
        <div className='back__button'>
            <button  onClick={(e)=>backtoproduct(e)} >
                Back to Products
            </button>
        </div>
        <div className='mycart'>
            <img  src={Mycart} alt='mycart'></img>
        </div>
        <div className='itemss'>
      
        <div className='cart__items'>
        {cartItems.map((cartItem, index) => (  
               
             <div key={index}  className='ordered__item'>
            
                <div className='order__pic'>
                    <img src={cartItem.imageUrl1} alt='/headphone'></img>
                </div>
                <div className='item_details'>
                    <h3>{cartItem.headphoneName}</h3>
                    <p>Color :{cartItem.color}</p>
                    <p>In Stock</p>
                    <h3 className='total'>{ cartItem.selectedQuantity} Item</h3>
                </div>
                <div>
                    <h3>Price</h3>
                    <h3>₹{cartItem.price}</h3>
                </div>
                <div>
                    <h3>Quantity</h3>
                    <select 
                        id="quantity"
                        name="quantity"
                        value={cartItem.selectedQuantity}
                        onChange={(e) => handleQuantityChange(e, index)}
                    >
                        {quantityOptions}
                    </select>
                </div>
                <div className='item_details'>
                    <h3>Total</h3>
                    <h3>₹{cartItem.price }</h3> 
                    <h3 className='total'>₹{cartItem.price *  cartItem.selectedQuantity}</h3>       
                </div>
           
            </div>
        ))}</div>
            <div className='aside__item'>
                <h3>PRICE DETAILS</h3>
                <p>Total MRP<span>₹{total}</span></p>
                <p>Discount on MRP<span>₹0</span></p>
                <p>Convenience Fee<span>₹45</span></p>
                <div  className='totall'> <p>Total<span>₹{total + 45}</span></p></div>
                <div className='place__order' ><button onClick={() => navigate('/placeorder')} >Place Order</button></div>        
            </div>
            {/* <button onClick={clearcart}>clear it now</button> */}
        </div>
        <div  className='mob__item'>
            <div className='huhu'>
            {cartItems.map((cartItem, index) => ( 
                <div className='mob__items' key={index}>
                    <div className='mobitem__pic'>
                        <img src={cartItem.imageUrl1} alt='/headphone'></img>
                    </div>
                    <div className='mob__cc'>
                        <h3>{cartItem.headphoneName}</h3>
                        <h2>₹{cartItem.price}</h2>
                        <p>color : {cartItem.color}</p>
                        <p>In Stock</p>
                        <p>Convenience Fee<span>₹45</span></p>
                    </div>
                </div>
            ))}
            <div className='tutal'>
                <p>Total : <span></span>₹{total + 45}</p>
            </div>
            </div>
            <div className='total__amount'>
                <p>Total Amount</p>
                <h3>₹{total+45}</h3>
            </div>
            <div className='mob__order' ><button onClick={() => navigate('/placeorder')} >Place Order</button></div> 
        </div> 
        <p className='Order_footer'>Musicart | All rights reserved</p>
        <MobileFooter/>
    </div>
  )
}

export default Orders