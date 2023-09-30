import React,{useState} from 'react'
import './Search.css'
import search from '../../../assets/search.png'
import axios from 'axios'
const Search = ({ applyFilters }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    const apiUrl = "https://musicart-hire.onrender.com/search";
    axios
      .post(apiUrl, { searchString: searchQuery})
      .then((response) => {
        console.log(response);
        applyFilters(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='search_input'>
        <input 
          type='search'
          placeholder='Search Product' 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
         ></input>
        <button onClick={handleSearch}><img src={search} alt='search'></img></button>
    </div>
  )
}

export default Search


// useEffect(() => {
   
//   axios
//     .get('http://localhost:4000/getproducts')
    
//     .then((response) => {
//       setOptions(response.data.products);
//     })
//     .catch((error) => {
//       console.error('Error fetching filtered data:', error);
//     });
// }, [options]);
// const [options,setOptions] = useState([]);