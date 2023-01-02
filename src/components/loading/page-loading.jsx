import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const PageLoading = () => {

  return <div className='loading'>
    <Spinner animation='border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  </div>
}

export default PageLoading