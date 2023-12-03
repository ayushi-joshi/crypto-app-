import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getCoinDetails, getGraphdata } from '../features/coins/coinSlice';
import { useEffect } from 'react';
import { Graph } from './Graph';
import { Link } from 'react-router-dom';
const CoinDetail = () => {
  const dispatch=useDispatch();
  const {coinId}=useParams();
  const coinDetail = useSelector(state => state.coins.coinDetail);
  const prices=useSelector(state=>state.coins.prices)
  const status = useSelector(state => state.coins.status);
  useEffect(() => {
   const fetchData=async()=>{
    if (status === 'idle') {
      dispatch(getCoinDetails(coinId));
      dispatch(getGraphdata(coinId));
  }
   };
   fetchData();
}, [dispatch, coinId, status]);

if (status === 'loading') {
    return <div>Loading...</div>;
}

if (status === 'failed') {
    return <div>Error loading coin details</div>;
}

  return (
    <div className='text-white d-flex justify-content-center mt-4 '>
    <div className='aside d-flex flex-column  '>
      <div>
      {coinDetail ? (
        <>
       <div className='d-flex flex-row justify-content-between p-3 '> 
    <div>   <img src={coinDetail.image.large} alt="" className='card-img'/></div>
<div className='mt-2'>
<h4>{coinDetail.name}</h4>
<p>₹ {coinDetail.market_data.current_price.inr}</p>
<p> $ {coinDetail.market_data.current_price.usd}</p>
<Link to={`/coinDetail/${coinDetail.id}`}><button className='rounded-0 border-0 btn btn-secondary'>view Graph</button></Link>
</div>
       </div>
<p>{coinDetail.description.en}</p>

</> ) : (
                    <p>Loading or no data available...</p>
                )}
      </div>
    </div>
    <div>


    </div>
  
    </div>
  )
}

export default CoinDetail