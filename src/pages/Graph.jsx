import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const Graph=({prices})=>{
  const {coinDetailId}=useParams();

   
    
  
  if (!Array.isArray(prices)) {
    
    return <div>No price data available</div>;
  }
  
const chartData=prices.map(value => (
  
 { x: value[0], y: value[1].toFixed(2) }
));
 

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
 
    },
    title: {
      display: true,
      text: 'Live Graph',
      
    },
  },
};



 const data = {
  labels: chartData.map(value=>moment(value.x).format('MMM DD')),

  datasets: [
    {
      fill: true,
      label: coinDetailId,
      data:chartData.map(val=> val.y),
      borderColor: 'blue',
      backgroundColor: "white",
    },
  ],
};


  return <Line options={options} data={data} />;

}


