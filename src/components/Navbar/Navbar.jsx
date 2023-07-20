import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { motion } from 'framer-motion'
function Navbar() {
  return (
    <header className='header'>
      <h1>CraftingBugs</h1>
      <div className='menu-items'>
        <Link to="/about" style={{textDecoration:'none', color:"#2d2d2d"}}><p >About</p></Link>
        <Button text = "Say hello !" />
      </div>
    </header>
  )
}

export default Navbar