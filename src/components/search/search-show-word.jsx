import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetShowCreateModal } from '../../features/words-slice'
import { SearchContext } from './search-context'

const SearchShowWord = () => {
  const dispatch = useDispatch()
  const { showWord } = useContext(SearchContext)

  useEffect(() => {
    console.log('debug')
    dispatch(resetShowCreateModal())
  }, [dispatch, showWord])

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