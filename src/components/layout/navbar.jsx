import React from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  return <div className='navbar-menu'>
    <div className='navbar-menu-link'>
    <Link to='/'> Search </Link>
    <Link to='bookmarks'>Bookmarks</Link>
    <Link to='history'>History</Link>
    </div>
  </div>
}

export default Account