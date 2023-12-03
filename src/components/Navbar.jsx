import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar ">
  <div className="d-flex ms-lg-5 ms-sm-2">
 
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Cryptocurrency_Gold.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top"/>
     <h3 className='ms-3 text-white mt-2'>Coin Canvas</h3>
   
  </div>
  <div className=''>
  <Link to="/" className='text-decoration-none'><li className="list-group-item me-5 fs-4 text-white  ">  <i class="bi bi-house-door me-2"></i>Home</li> </Link>


  </div>
</nav>
    </div>
  )
}

export default Navbar

