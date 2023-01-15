import React, { useState } from 'react'
import WordMeaning from '../history/word-meaning'
import { remove } from '../../utilities/search-helper'

const Bookmarks = () => {

  const [bookmarkIcon, setBookmarkIcon] = useState('bookmark-icon-fill')
  const [localStorageValue, setLocalStorageValue] = useState(JSON.parse(localStorage.getItem('bookmarks')))

  const handleRemoveBookMark = (value) => {
    remove(value, 'bookmarks')
    setBookmarkIcon('')
    setLocalStorageValue(JSON.parse(localStorage.getItem('bookmarks')))
  }

  return <>
    {
      (localStorageValue || []).length === 0 ?
        <span className='bookmark-warning'>There is no data to show. Please bookmark for word!</span>
        :
        <div className='bookmarks'>
          {
            (localStorageValue || []).map((value) => {
              return <div key={value} className='bookmark'>
                <div className='bookmarks-title' >
                  {
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleRemoveBookMark(value)} width="16" height="16" fill="currentColor" class={`bi bi-bookmark-fill ${bookmarkIcon}`} viewBox="0 0 16 16">
                      <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                    </svg>
                  }
                  <span>{value.replace(/"/g, "").toUpperCase()}</span>
                </div>
                <div class='bookmarks-content'>
                  <WordMeaning word={value.replace(/"/g, "")} bookmark={true} />
                </div>
              </div>
            })
          }
        </div>
    }
  </>
}

export default Bookmarks