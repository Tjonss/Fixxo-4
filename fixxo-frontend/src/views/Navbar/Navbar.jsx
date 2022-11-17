import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
// import { useSelector } from 'react-redux';
// import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Navbar = () => {

    // const totalQuantity = useSelector(state => state.cartReducer.totalQuantity)
    
  return (

    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
    
    <div className="container-fluid">
        <Link to='/' className='navbarlogo'><h4 className='navbar-logo'>Fixxo.</h4></Link>
        <button className="navbar-toggler" >
        <i className="fas fa-bars"></i>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item toplinks">
            <Link to='/' className="nav-link me-2" aria-current="page" >Home</Link>
            </li>
            
            <li className="nav-item dropdown toplinks">
            <a className="nav-link me-2" aria-current="page">
                Categories
            </a>
            
            </li>
            <li className="nav-item toplinks">
            <Link to='/products' className="nav-link">Products</Link>
            </li>
            <li className="nav-item toplinks">
            <a className="nav-link">Pages</a>
            </li>
            <li className="nav-item toplinks">
            <a className="nav-link">Blog</a>
            </li>
            {/* <li className="nav-item">
            <a className="nav-link disabled"
                >Disabled</a
            >
            </li> */}
        </ul>
        </div>
    
        
        <NavLink to='/cart' className="nav-link me-3 redhover">
           My Cart / $0.00
        </NavLink>
        

        <div className="dropdown">
            <a
            className="link-secondary me-3"
            role="button"
            >
            <i className="far fa-heart"></i>
            <span className="badge rounded-pill badge-notification redpill">1</span>
            </a>
        </div>

        <a
            className="link-secondary me-3"
            role="button"
            >
            <i className="fas fa-shopping-bag"></i>
            <span className="badge rounded-pill badge-notification redpill">0</span>
            </a>
            {/* <ShoppingCart/> */}

            <a className="nav-link me-3 redhover">Login</a>
    {/* </div> */}
    </div> 
    </nav>
  )
}

export default Navbar