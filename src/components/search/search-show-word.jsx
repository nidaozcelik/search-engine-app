import React, { useContext } from 'react'
import { SearchContext } from './search-context'

const SearchShowWord = () => {
  const { showWord } = useContext(SearchContext)

  return <>
    {
      (showWord || []).map(data => {
        return <div key={Math.random()}>
          <span className='content-name'>{data.name}; </span>
          <span className='content-meaning'>{data.meaning}</span>
        </div>
      })
    }
  </>
}

export default SearchShowWord