import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/list'>Pokemon List</NavLink>
        </li>
        <li>
          <NavLink to='/search'>Search</NavLink>
        </li>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar
