import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CoinDetail from './pages/CoinDetail'
import Chart from './pages/Chart'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
  // import Graph from './pages/Graph'

const App = () => {
  return (
    <Router>
<Navbar/>
<div>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/coin/:coinId' element={<CoinDetail/>}/>
    <Route path='/coinDetail/:coinDetailId' element={<Chart/>}/>
   </Routes>
 
</div>
</Router>
  )
}

export default App
