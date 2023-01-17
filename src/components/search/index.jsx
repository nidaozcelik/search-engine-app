import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import {
  setSearchedWord, resetSearchedWord, resetNotifications, setShowNotification,
  setMeaning, resetMeaning, useGetWordQuery, setVoiceSearch
} from '../../features'
import SearchShowWord from './search-show-word'
import PageLoading from '../loading/page-loading'
import VoiceSearch from '../voice-search'
import { SearchContext } from './search-context'
import { save } from '../../utilities/search-helper'

const Search = () => {
  const dispatch = useDispatch()
  const { words: { showWord, searchedWord, voiceSearch }, notifications: { notificationsList, showNotification } } = useSelector(state => state.words)
  const [searchTerm, setSearchTerm] = useState('')

  const {
    currentData: data,
    isLoading
  } = useGetWordQuery(searchedWord, { skip: !searchedWord || (searchedWord && searchedWord.length < 3) })

  useEffect(() => {
    dispatch(setVoiceSearch(false))
    const delayDebounceFn = setTimeout(() => {
      dispatch(setSearchedWord(searchTerm))
    }, 500)
    return () => clearTimeout(delayDebounceFn)
  }, [dispatch, searchTerm])

  useEffect(() => {
    if (data && searchedWord) {
      dispatch(setMeaning(data[0].meanings[0].definitions))
      save(searchedWord, 'history')
    }
  }, [dispatch, data, searchedWord])

  useEffect(() => {
    if (!searchedWord) {
      dispatch(resetMeaning())
    }
  }, [dispatch, searchedWord])

  const showNotificationModal = (status) => {
    dispatch(setShowNotification(status))
  }

  const resetNotificationModal = () => {
    dispatch(resetNotifications())
  }

  const toggleShowClose = () => {
    resetNotificationModal()
  }

  const resetSearchWord = () => {
    dispatch(resetSearchedWord())
  }

  const contextValue = {
    searchedWord,
    showWord,
    notificationsList,
    showNotification,
    resetSearchWord,
    showNotificationModal,
    resetNotificationModal,
    isLoading
  }

  return <SearchContext.Provider value={contextValue}>
    <div className='search-wrapper'>
      <div className='search-header'>
        <div className='search-title'>
          <span>Dictionary</span>
        </div>
        <div className='search-box'>
          <input
            autoFocus
            type='text'
            autoComplete='off'
            placeholder='What are you looking for? (e.g., book, car...)'
            onChange={e => setSearchTerm(e.target.value)}
            value={voiceSearch ? searchedWord : searchTerm}
          >
          </input>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search input-icons search-icon" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <VoiceSearch />
        </div>
      </div>
      <div className='search-content'>
        {
          isLoading ? <PageLoading /> : <SearchShowWord />
        }
        <ToastContainer position='top-end' className='p-3'>
          {
            notificationsList &&
            <Toast onClose={toggleShowClose} show={showNotification} animation={false}>
              <Toast.Header>
                <strong className='me-auto'>{notificationsList.status}</strong>
              </Toast.Header>
              <Toast.Body>{notificationsList.message}</Toast.Body>
            </Toast>
          }
        </ToastContainer>
      </div>
    </div>
  </SearchContext.Provider>
}

export default Search