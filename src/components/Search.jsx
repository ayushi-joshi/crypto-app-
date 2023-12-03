import React, { useState } from 'react'
import Cryptolist from './Cryptolist'
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/coins/coinSlice';
import { setPrice } from '../features/coins/coinSlice';
const Search = () => {
  const dispatch = useDispatch();
 

const handleSetPrice= (min, max) => {
    dispatch(setPrice({ min, max }));
};
const handleChange=(e)=>{
 e.preventDefault()
  dispatch(setSearchTerm(e.target.value));
  dispatch(fetchCoin(e.target.value));
}
  
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center '>
        <h3 className='text-white mt-5'>Welcome to the coin canvas</h3>
      </div>
      <div className='d-flex  justify-content-center mt-2 '>
       <input type="text"  onChange={handleChange}  placeholder='Search' style={{width:300}}  />
       <div class="dropdown ms-2">
  <button class="btn btn-primary dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select by Price
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" onClick={() => handleSetPrice(0, 100)}>under $100</a></li>
    <li><a class="dropdown-item" href="#" onClick={() => handleSetPrice(100, 500)}>$100 - $500</a></li>
    <li><a class="dropdown-item" href="#" onClick={() => handleSetPrice(500, 1000)}>$500 - $1000</a></li>
    <li><a class="dropdown-item" href="#" onClick={() => handleSetPrice(1000, Number.MAX_VALUE)}>over $1000</a></li>
  </ul>
</div>

      </div>
      <Cryptolist/>
    </div>
  )
}

export default Search
