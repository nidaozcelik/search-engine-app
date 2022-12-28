import React, { useContext } from 'react'
import { SearchContext } from './search-context'

const SearchContent = () => {
  const { showData } = useContext(SearchContext)

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