import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import {
  setSearchedWord, resetShowWord, setShowCreateModal, resetSearchedWord,
  resetNotifications, setShowNotification, setMeaning, resetMeaning
} from '../../features/ui-slice'
import SearchShowWord from './search-show-word'
import SearchCreateWord from './search-create-word'
import { SearchContext } from './search-context'
import { useGetWordQuery } from '../../features'

const Search = () => {
  const dispatch = useDispatch()
  const { words: { showWord, searchedWord, meanings }, createWord: { showCreateModal }, notifications: { notificationsList, showNotification } } = useSelector(state => state.words)

  const {
    currentData: data
  } = useGetWordQuery(searchedWord, { skip: !searchedWord })

  useEffect(() => {
    if (data) {
      dispatch(setMeaning(data[0].meanings[0].definitions))
    }
  }, [dispatch, data])

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

  const handleOnClickCreateWord = () => {
    dispatch(setShowCreateModal(true))
    dispatch(resetShowWord())
  }

  const handChangeWordState = (e) => {
    dispatch(setSearchedWord(e))
  }

  const resetSearchWord = () => {
    dispatch(resetSearchedWord())
  }

  const contextValue = {
    searchedWord,
    showWord,
    notificationsList,
    showNotification,
    showCreateModal,
    resetSearchWord,
    showNotificationModal,
    resetNotificationModal
  }

  return <SearchContext.Provider value={contextValue}>
    <div className='search-wrapper'>
      <div className='search-header'>
        <div className='search-title'>
          <span>Dictionary</span>
        </div>
        <div className='search-box'>
          <input
            placeholder='What are you looking for? (e.g., book, car...)'
            onChange={(e) => handChangeWordState(e.target.value)}
            value={searchedWord}
          >
          </input>
          <svg class='w-6 h-6 search-icon' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path></svg>
        </div>
        {
          searchedWord && !meanings && <div className='search-button'>
            <button className='add' onClick={handleOnClickCreateWord} disabled={!searchedWord}>+</button>
          </div>
        }
      </div>
      <div className='search-content'>
        <SearchShowWord />
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
        {searchedWord && showCreateModal && <SearchCreateWord />}
      </div>
    </div>
  </SearchContext.Provider>
}

export default Search