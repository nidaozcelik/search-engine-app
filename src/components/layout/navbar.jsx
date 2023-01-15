import React from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  return <div className='navbar-menu'>
    <Link to='/'> Home </Link>
    <Link to='bookmarks'>Bookmarks</Link>
    <Link to='history'>History</Link>
  </div>
}

export default Account