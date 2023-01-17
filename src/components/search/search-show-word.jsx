import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { save, remove } from '../../utilities/search-helper'

const SearchShowWord = () => {
  const { words: { searchedWord, meanings } } = useSelector(state => state.words)

  let localStorageValue = JSON.parse(localStorage.getItem('bookmarks'))
  let bookmarkClassName = (localStorageValue || []).includes(searchedWord) ? 'bookmark-icon-fill' : 'bookmark-icon'

  const [bookmarkIcon, setBookmarkIcon] = useState(bookmarkClassName)

  const handleCreateBookMark = () => {
    if (!(localStorageValue || []).includes(searchedWord)) {
      save(searchedWord, 'bookmarks')
      setBookmarkIcon('bookmark-icon-fill')
    } else {
      remove(searchedWord, 'bookmarks')
      setBookmarkIcon('bookmark-icon')
    }
  }

  useEffect(() => {
    setBookmarkIcon((JSON.parse(localStorage.getItem('bookmarks')) || []).includes(searchedWord) ? 'bookmark-icon-fill' : 'bookmark-icon')
  }, [searchedWord])

  return <>
    {
      meanings && <div className='search-content-wrapper'>
        {
          searchedWord && (meanings || []).slice(0, 2).map(meaning => {
            return <div key={Math.random()}>
              <div className='search-content-meaning'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                  <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
                {meaning.definition}
              </div>
            </div>
          })
        }
        <div className='search-content-bookmark'>
          {
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class={`bi bi-bookmark-fill ${bookmarkIcon}`} viewBox="0 0 16 16" onClick={handleCreateBookMark}>
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
            </svg>
          }
        </div>
      </div>
    }
  </>
}

export default SearchShowWord