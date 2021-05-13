import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Dropdown />
      <nav className={styles.navbar}>
        <Link to="/todo" className="mybutton Link-left">
          To do's
        </Link>
        <Link to="/shop" className="mybutton position-left">
          Shop
        </Link>
        <Link to="/cards" className="mybutton position-left">
          Cards
        </Link>
        <Link to="/nasa" className="mybutton position-left">
          Space Img
        </Link>
        <Link to="/love" className="mybutton position-left">
          Love Percentage
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
