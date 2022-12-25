import React, { } from 'react'

const SearchContent = ({ showData }) => {

  return <>
    {
      showData.map(data => {
        return <>
          <span className='content-name'>{data.name}; </span>
          <span className='content-meaning'>{data.meaning}</span>
        </>
      })
    }
  </>
}

export default SearchContent