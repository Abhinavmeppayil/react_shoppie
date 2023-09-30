import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Nav.css'
import { HashLink } from 'react-router-hash-link'

function Nav() {
  return (
    <div className='container'>
        <nav>
            <h1 style={{color:'black'}}>TECH</h1>
        </nav>
        <div className='items'>
            
       
        <HashLink className='item' to={"/#home"}>Home</HashLink>
        <HashLink className='item' to={"/#about"}>About</HashLink>
        <HashLink className='item' to={"/#brands"}>Brands</HashLink>

        <Link className='item' to={"/contact"}>Contacts</Link>
        <Link className='item' to={"/service"}>Services</Link>

        </div>
    </div>
  )
}

export default Nav