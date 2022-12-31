import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import {
  setSearchedWord, setShowWord, resetShowWord, setShowCreateModal, setNotifications,
  resetNotifications, setShowNotification
} from '../../features/words-slice'
import { SearchContext } from './search-context'
import SearchShowWord from './search-show-word'
import SearchCreateWord from './search-create-word'

const Search = () => {
  const dispatch = useDispatch()
  const { words: { data, showWord, searchedWord }, createWord: { showCreateModal }, notifications: { notificationsList, showNotification } } = useSelector(state => state.words)

  const toggleShowStatus = () => {
    dispatch(setShowNotification(false))
    dispatch(resetNotifications())
  }

  const handleOnClickCreateWord = () => {
    dispatch(setShowCreateModal(true))
    dispatch(resetShowWord())
  }

  const handChangeWordState = (e) => {
    dispatch(setSearchedWord(e))
  }

  const handleOnClickSearch = () => {
    if (searchedWord && data.some(item => item.name === searchedWord)) {
      let findWord = data.find(item => item.name.includes(searchedWord))
      dispatch(setShowWord([findWord]))
      dispatch(resetNotifications())
    } else {
      dispatch(setNotifications(
        {
          key: Math.random(),
          status: 'Warning',
          message: 'This word has no meaning. If you want, you can add it by pressing the (+) button.'
        }))
      dispatch(setShowNotification(true))
    }
  }

  const contextValue = {
    searchedWord,
    showWord,
    notificationsList,
    showNotification,
    showCreateModal,
  }

  return <SearchContext.Provider value={contextValue}>
    <div className='search-wrapper'>
      <div className='search-header'>
      <div className='search-title'>Dictionary</div>
        <div className='search-box'>
          <input
            placeholder='What are you looking for? (e.g., book, car...)'
            onChange={(e) => handChangeWordState(e.target.value)}
            value={searchedWord}
          >
          </input>
          <svg class='w-6 h-6 search-icon' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path></svg>
        </div>
        <div className='search-button'>
          <button className='add' onClick={handleOnClickCreateWord} disabled={!searchedWord}>+</button>
          <button className='search' onClick={handleOnClickSearch} disabled={!searchedWord}>?</button>
        </div>
      </div>
      <div className='search-content'>
        <SearchShowWord />
        <ToastContainer position='top-end' className='p-3'>
          {
            notificationsList &&
            notificationsList.map(notification => {
              return <Toast onClose={toggleShowStatus} key={notification.key} show={showNotification} animation={false}>
                <Toast.Header>
                  <strong className='me-auto'>{notification.status}</strong>
                </Toast.Header>
                <Toast.Body>{notification.message}</Toast.Body>
              </Toast>
            })
          }
        </ToastContainer>
        {searchedWord && showCreateModal && <SearchCreateWord />}
      </div>
    </div>
  </SearchContext.Provider>
}

export default Search