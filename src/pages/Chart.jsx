import React from 'react'
import { Graph } from './Graph'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getGraphdata } from '../features/coins/coinSlice';
const Chart = () => {
    const dispatch=useDispatch();
  const {coinDetailId}=useParams();
  const prices=useSelector(state=>state.coins.prices)
  const status = useSelector(state => state.coins.status);
  useEffect(() => {
    if (status === 'idle') {
       
        dispatch(getGraphdata(coinDetailId));
    }
}, [dispatch,coinDetailId, status]);

  return (
    <div className='d-flex  mt-2 justify-content-center'>
        <div className=' d-flex aside-2  align-items-center justify-content-center  '>
      <Graph prices={prices}/>
    </div>
    </div>
  )
}

export default Chart
