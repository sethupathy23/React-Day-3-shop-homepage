import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';


const Navbar = ({count}) => {
  return (
    <header>
    <div className='logo'>
        Start Bootstrap
    </div>
    <div className="display-menu">
        <Link className="menu" to={"/"}>Home</Link>
        <Link className="menu" to={"/about"}>About</Link>

        <Link className="menu" to={"/shop"}>Shop</Link>
        <Button variant="outlined"><ShoppingCartIcon />Cart - {count}</Button>
        </div>    
    </header>
  )
}

export default Navbar