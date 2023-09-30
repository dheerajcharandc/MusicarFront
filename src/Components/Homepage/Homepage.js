import React,{useState,useEffect} from 'react'
import Header from './Header/Header'
import Poster from './Poster/Poster'
import Filters from './Filters/Filters'
import Items from './Items/Items'
import MobileFooter from '../MobileFooter/MobileFooter'
import './Homepage.css'
import Search from './Search/Search'
import axios from 'axios'
const Homepage = () => {

  const [isVerticalView, setVerticalView] = useState(false);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
   
    axios.get("https://musicart-hire.onrender.com/getproducts")
      .then((response) => {
        setFilteredData(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);
  const handleFilterChange = (filteredProducts) => {
    setFilteredData(filteredProducts);
  };
  const toggleView = (event) => {
    event.preventDefault();
    setVerticalView(!isVerticalView);
  }
  const applyFilters = (filteredProducts) => {
    setFilteredData(filteredProducts);
  };
  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCartItemCount = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItemCount(storedCart.length);
  };
  
  return (
    <div>
        <Header />
        <Poster cartItemCount={cartItemCount} />
        <Search applyFilters={applyFilters}/>
        <Filters toggleView={toggleView} isVerticalView={isVerticalView} onFilterChange={handleFilterChange}/>
        <Items isVerticalView={isVerticalView} updateCartItemCount={updateCartItemCount}  selectedFilters={filteredData}/>
        <p className='homepage_footer'>Musicart | All rights reserved</p>
        <MobileFooter/>
    </div>
  )
}

export default Homepage