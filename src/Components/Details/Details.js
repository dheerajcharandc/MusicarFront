
import Header from '../Homepage/Header/Header'
import music from '../../assets/music.png'
import cart from '../../assets/cart.png'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Star from './../../assets/Star.png'
import Search from '../Homepage/Search/Search'
import MobileFooter from '../MobileFooter/MobileFooter'
import Products from '../../assets/Products.png'
import './Details.css'
import { useLocation } from 'react-router-dom';

const Details = () => {

    const navigate=useNavigate();

    const location = useLocation();

    const item = location.state.item;
    const handleAddToCart = (event, item) => {
        event.preventDefault();
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
     
        const existsInCart = cartItems.some((cartItem) => cartItem.id === item._id);
    
        if (!existsInCart) {

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
        }
      };
    const backtohome=(e)=>{
        e.preventDefault();
        navigate('/');
    }
    const toCreatee=(e)=>{
        e.preventDefault();
        navigate('/signup');
    }
    const toLogin=(e)=>{
        e.preventDefault();
        navigate('/login');
    }
    const [isUserLoggIn, setIsUserLoggIn] = useState(false);
    
  useEffect(() => {
    const userToken = localStorage.getItem('userData');
    setIsUserLoggIn(!!userToken); 
  }, []);
 
  return (
    <div className='details'>
        <Header/>
        <div className='details__search'>
            <Search/>
        </div>
        <div className='card__top'>
            <div className='cart_para' >
                <p className='cart_span'><img src={music} alt='/music' height={'45px'} width={'45px'}></img>Musicart </p>
                <span>Home/{item.headphoneName}</span>
            </div>
            <div className='cart__button'>
                <img src={cart} alt='/cart' height={'15px'} width={'15px'}></img>
                <button onClick={(event) => handleAddToCart(event, item)}>Add to cart</button>
            </div>
        </div>
        <div className='back__button'>
            <button onClick={(e)=>{backtohome(e)}}>
                Back to Products
            </button>
        </div>
        <div className='back'>
            <button onClick={backtohome}>
                <img src={Products} alt='/products'></img>
            </button>
        </div>
        <h3 className='para__details'>
            {item.desc}
        </h3>
     
        <div className='head__details'>
        {isUserLoggIn 
        &&
        <div className='Buyy'>
        <button >Buy Now</button>
        </div>
        }
            <div className='images'>
                <div className='head_image'>
                    <img src={item.imgUrl1} alt='head'></img>
                </div>
                <div className='specification__image'>
                    < img className='head__img' src={item.imgUrl1} alt='head'></img>
                    <img src={item.imgUrl2} alt='pic1'></img>
                    <img src={item.imgUrl3} alt='pic2'></img>
                    <img src={item.imgUrl4} alt='pic3'></img>
                </div>
            </div>
            <div className='details__desc'>
                <h2>{item.headphoneName}</h2>
                <div className='review'>
                    <img src={Star} alt='star'></img>
                    <img src={Star} alt='star'></img>
                    <img src={Star} alt='star'></img>
                    <img src={Star} alt='star'></img>
                    <img src={Star} alt='star'></img>
                    <span>(50 Customer reviews)</span>
                </div>
                <p className='para___desc'>
                    {item.desc}
                </p>
                <h3>Price - ₹{item.price}</h3>
                <p className='details__p1'>{item.color} | {item.headphoneType} headphone</p>
               
                <p>About this item</p> 
                <ul>
                   {
                    item.desc1[0].split('`,').map((about,index)=>{
                        const cleanedString = index === 0 ? about.replace('[', '') : index === item.desc1.length-1 ? about.replace(']', '') : about;
                        return(
                        <li key={index}>{cleanedString}</li>
                        )
                    })
                   }
                </ul>
                <p className='brands'>Available<span>- In stock</span> </p>
                <p className='brands'>Brand -<span>{item.company}</span></p>
                <div className='details__button'>
                    {isUserLoggIn ? (
                    <>
                        <button  className='Add'onClick={(event) => handleAddToCart(event, item)}>Add to cart</button>
                        <button className='Buy'  onClick={() => {
                            handleAddToCart({ preventDefault: () => {} }, item); 
                            navigate('/placeorder'); 
                        }}>Buy Now</button>
                    </>
                    ) : (
                    <>
                        <button onClick={(e)=>toLogin(e)}  className='Add'>Login First</button>
                        <button onClick={(e)=>toCreatee(e)}  className='Buy'>Signup First</button>
                    </>
                    )}
          </div>
            </div>
        </div>
        <p className='details_footer'>Musicart | All rights reserved</p>
        <MobileFooter/>
    </div>
  )
}

export default Details