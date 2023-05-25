import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'

const NavBar = () => {
  const style = {
    color: 'white',
  }

  const navActive = ({ isActive }) => (isActive ? style : undefined)

  return (
    <>
      <nav>
        <li>
          <NavLink to='/' style={navActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/list' style={navActive}>
            Pokemon List
          </NavLink>
        </li>
        <li>
          <NavLink to='/search' style={navActive}>
            Search
          </NavLink>
        </li>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar
