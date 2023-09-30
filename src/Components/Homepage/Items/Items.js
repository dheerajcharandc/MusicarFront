import React ,{useEffect,useState} from 'react'
import './Items.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import newcart from '../../../assets/newcart.png'
const Items = ({ isVerticalView,updateCartItemCount , selectedFilters}) => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);



  useEffect(() => {
    const userToken = localStorage.getItem('userData');
    setIsUserLoggedIn(!!userToken); 
   
  }, []);

  const handleAddToCart = (event,item) => {
    event.preventDefault(); 
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existsInCart = cartItems.some((cartItem) => cartItem.id === item._id);
    if(!existsInCart){
    const newItem = {
      id: item._id, 
      imageUrl1: item.imgUrl1,
      color: item.color,
      headphoneName: item.headphoneName,
      price: item.price,
       selectedQuantity: 1,
    };
    cartItems.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartItemCount();
  }};

  const navigate = useNavigate();

  const handleItemClick = (event,item) => {
    event.preventDefault(); 
    navigate(`/details/${item.headphoneName}`, { state: { item } });
    
  };
  return (
   
    <div className='items'>
    {!isVerticalView? <div className='horizontal__view'>
        {
          selectedFilters.map((item,index)=>{
            return(
              <div key={index} className='item' >
                <div className='item-content'>
                <div className='image-container'>
                  <img className="pro__img" src={item.imgUrl1} onClick={(event) => handleItemClick(event,item)}  alt='headd'></img>
                 {isUserLoggedIn && <button className='new__cart' onClick={(event) => handleAddToCart(event, item)}><img src={newcart} alt='/newcart'></img></button>}
                </div>
                <div className='content'>
                  <h3>{item.headphoneName}</h3>
                  <h3>price -₹{item.price}</h3>
                  <h3>{item.color}|{item.headphoneType} headphone</h3>
                </div>
                </div>
              </div>
            )
          })
        }
      </div>:
      <div className='vertical__view'>
      {
         selectedFilters.map((item,index)=>{
            return(
              <div key={index} className='item__vertical' >
                <div className='image-container'>
                  <img className="pro__img" src={item.imgUrl1}  onClick={(event) => handleItemClick(event,item)} alt='headd'></img>
                  <button className='new__cart1'><img src={newcart} alt='/newcart'></img></button>
                </div>
                <div className='item__det'>
                  <h2>{item.headphoneName}</h2>
                  <p>Price -₹{item.price}</p>
                  <p>{item.color}|{item.headphoneType}</p>
                  <p>{item.desc}</p>
                  <button onClick={(event) => handleItemClick(event,item)}>Details</button>
                </div>
              </div>
            )
          })
        }
      </div>
}
    </div>
  )
}

export default Items