import React, { useState,useEffect } from 'react';
import './Filters.css'
import hori from './../../../assets/hori.png'
import veri from './../../../assets/vert.png'
import axios from 'axios';

const Filters = ({ toggleView, isVerticalView, onFilterChange}) => {
 
  const [selectedType, setSelectedType] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const [selectedsort, setSelectedsort] = useState('');
  const [minPrice, setMinPrice] = useState(0); 
  const [maxPrice, setMaxPrice] = useState(0); 

  const headphoneTypes = ['In-Ear', 'On-Ear', 'Over-Ear'];
  const companies = ['BoAt', 'JBL', 'Sony', 'Zebronics']; 
  const colors = [ 'Brown', 'Blue', 'Black', 'White'];

  const sortBys=['featured','lowest','highest','A-Z','Z-A']

  
  const filtered = () => {
    const apiUrl = "https://musicart-hire.onrender.com/filter";
    axios
      .post(apiUrl, {
        company: selectedCompany,
        headphoneType: selectedType,
        color: selectedColor,
        minPrice: minPrice,
        maxPrice: maxPrice,
       
        sortBy: selectedsort,
      })
      .then((response) => {
        console.log(response);
        onFilterChange(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
      filtered();
  },[selectedType, selectedCompany, selectedColor, selectedsort, minPrice, maxPrice])
  // const handleTypeChange = (e) => {
  //   setSelectedType(e.target.value);
  //   filtered();
  // };
  
  // const handleCompanyChange = (e) => {
  //   setSelectedCompany(e.target.value);
  //   filtered();
    
  // };
  // const handleColorChange = (e) => {
  //   setSelectedColor(e.target.value);
  //   filtered();
    
  // };

  // const srtChange = (e) => {
  //   setSelectedsort(e.target.value);
  //   filtered();
  // };
  // const handlePriceChange = (e) => {
  //   const selectedPriceRange = e.target.value;
  //   if (selectedPriceRange === "100-1000") {
  //     setMinPrice(100);
  //     setMaxPrice(1000);
  //   } else if (selectedPriceRange === "1000-2000") {
  //     setMinPrice(1000);
  //     setMaxPrice(2000);
  //   } 
  //   filtered();
  // };
  return (
    <div className='filters'>
       
        <div className='filter'>
          <div className='view__change'>
            <button onClick={(event) => toggleView(event)} className={!isVerticalView ? 'active' : ''}>
              <img src={hori} alt='hori' height={'30px'} width={'30px'}></img>
            </button>
            <button onClick={toggleView} className={isVerticalView ? 'active' : ''}>
            
              <img src={veri} alt='veri' height={'30px'} width={'40px'}></img>
            </button>
          </div>
          <div className='filter__button'>
            <div>
              <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                <option value="">Headphone type</option>
                {headphoneTypes.map((type) => (
                  <option key={type} value={type}  >
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                <option value="">Company</option>
                {companies.map((company) => (
                  <option key={company} value={company}  >
                    {company}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                <option value=""> Color</option>
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div>
            <select  onChange={ (e) => {
                                         const selectedPriceRange = e.target.value;
                                           if (selectedPriceRange === "100-1000") {
                                               setMinPrice(100);
                                                setMaxPrice(1000);
                                                } else if (selectedPriceRange === "1000-2000") {
                                                 setMinPrice(1000);
                                                  setMaxPrice(2000);
                                              } }} >
              <option value="">Price</option>
              <option  value="100-1000">₹100-₹1,000</option>
              <option  value="1000-2000">₹1,000-₹2,000</option>
            </select>
            </div>
        </div>
        <div className='sort'>
        <div className='sortby'>
              <select value={selectedsort} onChange={(e) => setSelectedsort(e.target.value)} >
                <option value="">Sort by</option>
                {sortBys.map((sort) => (
                  <option key={sort} value={sort}>
                    {sort}
                  </option>
                ))}
              </select>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Filters