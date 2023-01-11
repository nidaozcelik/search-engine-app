import React from 'react'
import { useSelector } from 'react-redux'
const savedData = require('../../utilities/search-helper')

const SearchShowWord = () => {
  const { words: { searchedWord, meanings }, createWord: { createdWords } } = useSelector(state => state.words)

  const handleCreateBookMark = () => {
    savedData(searchedWord, 'bookmarks')
  }

  return <>
    {
      meanings && <div className='search-content-wrapper'>
        {
          (meanings || (createdWords && createdWords[0].word === searchedWord)) && searchedWord &&
          (meanings || createdWords || []).slice(0, 2).map(meaning => {
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16" onClick={handleCreateBookMark}>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
          </svg>
        </div>
      </div>
    }
  </>
}

export default SearchShowWord