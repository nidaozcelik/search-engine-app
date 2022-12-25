import React from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  return <div className='navbar-menu'>
    <div className='navbar-menu-info'>Demo</div>
    <div className='navbar-menu-link'>
    <Link to='/'> Search </Link>
    <Link to='account'>Account Page</Link>
    </div>
  </div>
}

export default Account