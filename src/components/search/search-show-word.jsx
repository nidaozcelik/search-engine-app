import React from 'react'
import { useSelector } from 'react-redux'

const SearchShowWord = () => {
  const { words: { searchedWord, meanings }, createWord: { createdWords } } = useSelector(state => state.words)

  return <>
    {
      (meanings || (createdWords && createdWords[0].word === searchedWord)) && searchedWord &&
      (meanings || createdWords || []).slice(0, 2).map(meaning => {
        return <div key={Math.random()}>
          <ul>
            <li className='content-meaning'>{meaning.definition}</li>
          </ul>
        </div>
      })
    }
  </>
}

export default SearchShowWord