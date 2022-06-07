import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'






const NavBar = () => {
  
  
  return (
    
<nav className="navbar navbar-expand-lg navbar-light">
  <Link className="navbar-brand" to="/">Tienda De lo Lindo</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/category/candyBox">Candy Box</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/category/candyBar">Candy Bar</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/category/kitImprimible">Kit Imprimibles</Link>
      </li>
    </ul>
    <div className="p-2 flex-shrink-1">
      <CartWidget/>
    </div>
  </div>
</nav>
     
  )
}

export default NavBar