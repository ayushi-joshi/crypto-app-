import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptocurrencies } from '../features/coins/coinSlice';
import {Link} from "react-router-dom"
const CryptoList = () => {
    const dispatch = useDispatch();
    const coins = useSelector(state => state.coins.coins);
    const status = useSelector(state => state.coins.status);
    const error = useSelector(state => state.coins.error);
    const searchTerm = useSelector(state => state.coins.searchTerm);
const price = useSelector(state => state.coins.price);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(getCryptocurrencies());
        }
    }, [status, dispatch]);``
    const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) )
      .filter(coin => 
        coin.current_price >= price.min && coin.current_price <= price.max
    )
   
    return (
        <div>
            {status === 'loading' && <p className='text-white text-center'>Loading...</p>}
            {status === 'succeeded' && (
                <div className='row'>

                    {filteredCoins.map(coin => (
                        <div key={coin.id} className='col-md-3 md-4 gy-3'>
                            <div className='card d-flex flex-row '>
                              <img src={coin.image} alt="" className="card-img-left"/>
                              <div className=' card-body  '>
                              <h5>{coin.name}</h5>
                            <p>Symbol: {coin.symbol}</p>
                            <p>Price: ${coin.current_price}</p>
                            <p>Market Cap: ${coin.market_cap}</p>
                              <Link to={`/coin/${coin.id}`}><button className='rounded-0 border-0 btn btn-primary'>view More</button></Link>
                              </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {status === 'failed' && <p>Error: {error}</p>}
        </div>
    );
}

export default CryptoList;












